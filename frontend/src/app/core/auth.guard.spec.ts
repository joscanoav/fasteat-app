import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isAuthenticated: () => true, getRole: () => 'admin' } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is authenticated and is admin', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    spyOn(authService, 'getRole').and.returnValue('admin');

    const result = guard.canActivate(null as any, null as any);  // Pasando valores null para estos parámetros

    expect(result).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to menu if user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);

    const result = guard.canActivate(null as any, null as any);  // Pasando valores null para estos parámetros

    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/menu']);
  });

  it('should redirect to menu if user is not admin', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    spyOn(authService, 'getRole').and.returnValue('user');

    const result = guard.canActivate(null as any, null as any);  // Pasando valores null para estos parámetros

    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/menu']);
  });
});
