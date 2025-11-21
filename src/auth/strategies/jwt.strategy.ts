import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_ACCESS_TOKEN_SECRET') ||
        'default_secret',
    });
  }

  async validate(payload: any) {
    // console.log('🔑 JWT Payload:', payload); // ✅ Add this
    const user = {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
    };

    // console.log('👤 Validated user:', user); // ✅ Add this

    return user;
  }
}
