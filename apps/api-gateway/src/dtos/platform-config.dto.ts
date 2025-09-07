import { ApiProperty } from '@nestjs/swagger';

export class PlatformConfigDto {
  @ApiProperty()
  externalIP: string;

  @ApiProperty()
  genesisURL: string;

  @ApiProperty()
  lastInternalIP: string;

  @ApiProperty()
  sgUsername: string;

  @ApiProperty()
  smtpHost: string;

  @ApiProperty()
  smtpPort: number;

  @ApiProperty()
  smtpSecure: boolean;

  @ApiProperty()
  smtpUser: string;

  @ApiProperty()
  smtpPass: string;

  @ApiProperty()
  emailFrom: string;
}
