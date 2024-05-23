import { SweetAlertIcon } from 'sweetalert2';

export interface HttpError {
  status: number,
  message: string
};

export interface Alert {
  title?: string, 
  text: string, 
  icon?: SweetAlertIcon
};

export interface Cards {
  listCard: ListCard[];
};

export interface ListCard {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
};

export interface CardAditionalInfo {
  title: string,
  category: string,
  date: string,
  achievements: string,
  youAlreadyHave: string
};

export interface MenuSidebar {
  title: string,
  icon: string
};