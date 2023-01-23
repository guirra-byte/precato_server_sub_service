export class AppError {
  msg: string;
  statusCode: number;
  module: string;

  constructor(msg: string, statusCode = 400, module?: string) {
    this.msg = msg;
    this.statusCode = statusCode;
    this.module = module !== undefined ? module : '';
  }
}
