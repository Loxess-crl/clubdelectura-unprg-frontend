import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BASE_ENDPOINT } from '../../../config/config';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  authService.checkUrl();
  if (req.url.includes('auth') && !req.url.includes('logout')) return next(req);
  if (req.url.includes('.json')) return next(req);

  const baseUrl = BASE_ENDPOINT;
  let headers = authService.getHttpOptions();

  const requestCorrect = req.clone({
    url: baseUrl + req.url,
    headers,
  });

  return next(requestCorrect);
};
