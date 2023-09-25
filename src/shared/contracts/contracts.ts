import { HttpStatus } from '@nestjs/common';

export type HttpResponse<T = any> =
    | HttpResponseType<T>
    | HttpResponseType<string>;

export class HttpResponseType<T = any> {
    status: number;

    data: T;

    headers?: Record<string, any>;

    constructor(input: HttpResponseType<T>) {
        Object.assign(this, input);
    }
}

export class HttpResponseTypeError<T = any> extends HttpResponseType<T> {
    constructor(input: HttpResponseTypeError<T>) {
        super(input);
    }
}

export class ErrorResponse extends HttpResponseTypeError {
    constructor(error: Error) {
        super({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            data: error.message,
        });
    }
}
export const errorResponse = (error: Error) => new ErrorResponse(error);

export class BadRequestResponse extends HttpResponseTypeError {
    constructor(message: string) {
        super({
            status: HttpStatus.BAD_REQUEST,
            data: message,
        });
    }
}
export const badRequestResponse = (error: { message: string }) =>
    new BadRequestResponse(error.message);

export const forbiddenResponse = (error: any) =>
    new HttpResponseType({
        status: HttpStatus.FORBIDDEN,
        data: error.message,
    });

export const successResponse = (data: any) =>
    new HttpResponseType({
        status: HttpStatus.OK,
        data,
    });

export const noContentResponse = () =>
    new HttpResponseType({
        status: HttpStatus.NO_CONTENT,
        data: null,
    });

export class AcceptedResponse extends HttpResponseType {
    constructor(data: any) {
        super({
            status: HttpStatus.ACCEPTED,
            data: data,
        });
    }
}
export const acceptedResponse = (data: any) => new AcceptedResponse(data);

export class CreatedResponse extends HttpResponseType {
    constructor(data: any) {
        super({
            status: HttpStatus.CREATED,
            data: data,
        });
    }
}
export const createdResponse = (data: any) => new CreatedResponse(data);

export const notAcceptableResponse = (data: any) =>
    new HttpResponseType({
        status: HttpStatus.NOT_ACCEPTABLE,
        data,
    });

export const unauthorized = (data: any) =>
    new HttpResponseType({
        status: HttpStatus.UNAUTHORIZED,
        data,
    });