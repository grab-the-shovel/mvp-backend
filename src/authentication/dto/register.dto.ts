import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'The password of the user' })
  readonly password: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  readonly name: string;
}
