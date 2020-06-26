export interface Message {
  message: string;
}

export interface RequestStatus {
  status: boolean;
  message: string;
  result: any;
}

export enum ActionTypes {
  Data = '[Socket] Data',
  ClientConnected = '[Socket] Client Connected',
  ValuePatched = '[Socket] Value Patched',
  PatchValue = '[Form] Patch Value',
  Init = '[Init] Init'
}

export interface FormData {
  title: string;
  description: string;
}