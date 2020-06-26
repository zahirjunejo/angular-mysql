export interface CustomCommand {
  buttonTitle: string;
  id: number;
}

export interface Company {
  id: number;
  name: number;
  logoPath: string;
  isMISP: boolean;
  isTechPartner: boolean;
  addressId: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  firstName: string;
  lastName: string;
  userEmail: string;
  designation: number;
}

export interface POCCheckboxTableResult {
  checked: boolean;
  data: any;
  columnID: any;
}

export interface POCCheckboxTableColumn {
  field: string;
  fieldTitle: string;
  width?: number;
  cssClass?: string;
  locked?: boolean;
  isCheckbox?: boolean;
  sortable: boolean;
  filterable: boolean;
  mergeColumns?: string[];
}

export interface IDataTableAction {
  label: string;
  icon?: string;
  command?: (param?: any) => any;
  isConditional?: boolean;
  field?: string;
  values?: any[];
}

export interface IActionResult {
  isSuccess: boolean;
  data?: any;
  error?: string;
}

export interface ImageUpload {
  imgUrl: any;
  base64Image: string;
  height: number;
  width: number;
}
