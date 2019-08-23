import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TypeMicroInput {
  @Field()
  id: number;
}

@ObjectType()
export class TypeMicroEntity {
  @Field()
  str: string;
}
