import { Controller, Post, Body, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto, RegisterDto, ResetPasswordDto } from './dto';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.authService.register(registerDto);
    if (!result) {
      throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 201, description: 'User logged successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Server Error' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.forgotPassword(resetPasswordDto);
  }
}
