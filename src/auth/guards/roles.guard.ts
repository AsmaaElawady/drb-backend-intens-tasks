// src/auth/guards/roles.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // console.log('🔍 Required roles:', requiredRoles); // ✅ Add this

    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();

    console.log('👤 User object:', user); // ✅ Add this
    console.log('🎭 User role:', user?.role); // ✅ Add this
    console.log('✅ Access granted:', requiredRoles.includes(user?.role)); // ✅ Add this

    return requiredRoles.includes(user.role);
  }
}
