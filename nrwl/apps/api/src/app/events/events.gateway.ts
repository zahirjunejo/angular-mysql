import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, Injectable } from '@nestjs/common';

import { ActionTypes, FormData } from '@poc/api-interfaces';

@WebSocketGateway()
//@Injectable()
export class EventsGateway {
  connectedClients = [];
  data = {};
  @WebSocketServer()
  server: Server;
  @WebSocketServer()
  logServer: Server;
  private logger: Logger = new Logger('EventsGateway');

  handleConnection(client: Socket) {
    this.connectedClients = [...this.connectedClients, client.id];
    this.logger.log(
      `Client connected: ${client.id} - ${this.connectedClients.length} connected clients.`
    );
    //this.server.emit(ActionTypes.ClientConnected, this.connectedClients);
    //this.server.emit(ActionTypes.Data, this.data);
    client.emit(ActionTypes.Data, this.data);
  }

  handleDisconnect(client: Socket) {
    this.connectedClients = this.connectedClients.filter(
      connectedClient => connectedClient !== client.id
    );
    this.logger.log(
      `Client disconnected: ${client.id} - ${this.connectedClients.length} connected clients.`
    );
    this.server.emit(ActionTypes.ClientConnected, this.connectedClients);
    this.logServer.emit(ActionTypes.ClientConnected, this.connectedClients);
  }

  @SubscribeMessage(ActionTypes.PatchValue)
  patchValue(client: Socket, payload: Partial<FormData>) {
    this.data = { ...this.data, ...payload };
    this.logger.log(`Patch value: ${JSON.stringify(payload)}.`);
    client.broadcast.emit(ActionTypes.ValuePatched, payload);
  }

  postLogs(data: any){
    this.logServer.emit(ActionTypes.Data, data);
  }

  postData(data: any){
    this.server.emit(ActionTypes.Data, data);
  }
}