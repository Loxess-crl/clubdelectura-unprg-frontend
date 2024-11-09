import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  // const dynamicDialog = inject(DialogService);
  const errors_to_show = [401, 429];
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (req.url.includes('login') || req.url.includes('logout'))
        return throwError(() => error);
      if (error.status === 404) {
        return throwError(() => error);
      }

      if (authService.getAuthError()) return throwError(() => error);

      if (error.status === 401) {
        authService.setAuthError(true);
      }
      if (
        errors_to_show.includes(error.status) &&
        !authService.getIsErrorModalOpen()
      ) {
        // dynamicDialog.open(ErrorDialogComponent, {
        //   header: 'Error',
        //   width: '300px',
        //   data: {
        //     status: error.status,
        //     message: error.error.message,
        //     errors: error.error.errors,
        //   },
        // });
      }
      return throwError(() => error);
    })
  );
};
