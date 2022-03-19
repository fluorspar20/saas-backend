import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class _8KAnalysisType {
  @Field({ nullable: true })
  date: string;

  @Field({ nullable: true })
  sentence: string;

  @Field({ nullable: true })
  sentiment: string;
}

@ObjectType()
export class _8k {
  @Field(() => ID, { nullable: true }) // same as the year of filing
  id: string;

  @Field(type => [_8KAnalysisType], { nullable: true })
  _0: _8KAnalysisType[];

  @Field(type => [_8KAnalysisType], { nullable: true })
  _1: _8KAnalysisType[];

  @Field(type => [_8KAnalysisType], { nullable: true })
  _2: _8KAnalysisType[];

  @Field(type => [_8KAnalysisType], { nullable: true })
  _3: _8KAnalysisType[];

  @Field(type => [_8KAnalysisType], { nullable: true })
  _4: _8KAnalysisType[];
}
