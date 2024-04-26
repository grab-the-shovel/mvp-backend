import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';
import { supabase } from '../config/supabase.client';

@Injectable()
export class AuthenticationService {
  async register(
    registerDto: RegisterDto,
  ): Promise<{ data: any; error: boolean; message?: string }> {
    try {
      const { email, password } = registerDto;
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        return {
          data: null,
          error: true,
          message: `Registration failed: ${error.message}`,
        };
      }
      return { data: user, error: false };
    } catch (err) {
      return {
        data: null,
        error: true,
        message: `Server error: ${err.message}`,
      };
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
