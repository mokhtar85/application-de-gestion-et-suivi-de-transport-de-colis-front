import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  private excludedEndpoints = ['/api/v1/auth/authenticate', '/api/v1/auth/register','/api/v1/auth/registerTransporteur'];

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isExcludedEndpoint(req.url)) {
      return next.handle(req);
    }

    const auth_token = sessionStorage.getItem('jwt');
    const jwtToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth_token}`
      }
    });

    return next.handle(jwtToken);
  }

  private isExcludedEndpoint(url: string): boolean {
    return this.excludedEndpoints.some(endpoint => url.includes(endpoint));
  }
}
