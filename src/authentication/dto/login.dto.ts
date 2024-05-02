import { ApiProperty } from '@nestjs/swagger';
import { emailPattern, passwordPattern } from '../../common/validation.patterns';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user, must be a valid email format like user@example.com',
    pattern: emailPattern.toString(),
  })
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description:
      'The password of the user, must contain at least one letter, one number, and be at least 8 characters long.',
    pattern: passwordPattern.toString(),
  })
  readonly password: string;
}
