import { HttpResponse } from './contracts';

export interface UseCase<Req = any, Res = any> {
  run: (request: Req) => Promise<HttpResponse<Res>>;
}