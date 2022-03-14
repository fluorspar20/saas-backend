import { Module } from '@nestjs/common';
import { CompaniesResolver } from './companies.module';

@Module({
  imports: [],
  providers: [CompaniesResolver],
})
export class CompaniesModule {}
