import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.forgotPassword(resetPasswordDto);
  }
}
