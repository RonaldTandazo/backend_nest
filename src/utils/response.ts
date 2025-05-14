import { HttpStatus } from '@nestjs/common';

export interface SuccessResponse<T> {
    ok: true;
    message: string;
    data: T;
    status: HttpStatus;
}

export interface ErrorResponse {
    ok: false;
    message: string;
    error?: any;
    status: HttpStatus;
}

export const success = <T>(message: string, data: T, status: HttpStatus = HttpStatus.OK): SuccessResponse<T> => {
    return {
        ok: true,
        message,
        data,
        status,
    };
};

export const error = (message: string, error?: any, status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR): ErrorResponse => {
    return {
        ok: false,
        message,
        error,
        status,
    };
};