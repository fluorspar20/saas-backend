import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CompaniesResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World';
  }
}
