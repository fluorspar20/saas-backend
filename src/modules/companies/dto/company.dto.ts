import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Collection, ISubCollection, SubCollection } from 'fireorm';
import { _10k } from './tenK.dto';
import { _10q } from './tenQ.dto';

@ObjectType()
@Collection('company')
export class CompanyType {
  @Field(() => ID, { nullable: true })
  id: string; // same as CIK

  @Field({ nullable: true })
  Address: string;

  @Field({ nullable: true })
  CompanyName: string;

  @Field({ nullable: true })
  FaxNumber: string;

  @Field({ nullable: true })
  HoldingType: string;

  @Field({ nullable: true })
  PhoneNumber: string;

  @Field({ nullable: true })
  URL: string;

  @Field({ nullable: true })
  IPODate: string;

  @Field(type => [_10k], { nullable: true })
  @SubCollection(_10k)
  _10k: ISubCollection<_10k>[];

  @Field(type => [_10q], { nullable: true })
  @SubCollection(_10q)
  _10q: ISubCollection<_10q>[];

  // @Field({ nullable: true })
  // EightK: string;

  // @Field({ nullable: true })
  // type: '0' | '-1' | '1';
}
