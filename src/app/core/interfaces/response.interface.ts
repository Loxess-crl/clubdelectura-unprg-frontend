export interface DataResponse<T> {
  success: boolean;
  message: string;
  data: Data<T>;
}

export interface Data<T> {
  data: T[];
  meta: Meta;
}

export interface Meta {
  total: number;
  perPage: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}
