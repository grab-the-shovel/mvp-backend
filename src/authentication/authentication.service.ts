import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';
import { supabase } from '../config/supabase.client';

@Injectable()
export class AuthenticationService {
  async register(registerDto: RegisterDto): Promise<any> {
    const { email, password } = registerDto;
    const { data, error } = (await supabase.auth.signUp({
      email,
      password,
    })) as { data: { user: any }; error: any };
    if (error) throw new Error(error.message);
    return data.user;
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
