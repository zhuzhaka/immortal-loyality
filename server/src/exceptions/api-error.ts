export class ApiError extends Error {
  status: number;
  errors: any[];

  constructor(status: number, message: string, errors: any[]) {
    super(message || "internal error");

    this.status = status || 500;
    this.errors = errors || [];
  }

  static BadRequest(message: string, errors: any[] = []) {
    return new ApiError(400, message, errors);
  }
}
