import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';
import { supabase } from '../config/supabase.client';

@Injectable()
export class AuthenticationService {
  async register(registerDto: RegisterDto): Promise<any> {
    try {
      const { email, password } = registerDto;
      const { data: user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw new HttpException(`Registration failed: ${error.message}`, HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (err) {
      throw new HttpException(`Server error: ${err.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(loginDto: LoginDto): Promise<any> {
    // Implement login logic using supabase
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async forgotPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    // Implement reset password logic using supabase
  }
}
