export interface Res<T> {
  statusCode: number;
  statusText: string;
  data: T;
  dataCount: number;
}
