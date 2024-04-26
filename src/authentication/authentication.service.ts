import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';

@Injectable()
export class AuthenticationService {
  async register(registerDto: RegisterDto): Promise<any> {
    // Implement registration logic
  }

  async login(loginDto: LoginDto): Promise<any> {
    // Implement login logic
  }

  async forgotPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    // Implement reset password logic
  }
}
