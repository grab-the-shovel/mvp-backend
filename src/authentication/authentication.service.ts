import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';

@Injectable()
export class AuthenticationService {
  async register(registerDto: RegisterDto): Promise<any> {
    const { email, password } = registerDto;
    const { user, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return user;
  }

  async login(loginDto: LoginDto): Promise<any> {
    // Implement login logic
  }

  async forgotPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    // Implement reset password logic
  }
}
