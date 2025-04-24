import {
  IacNodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'
import { RdsInstance } from '@reactiac/standard-components-diagrams'
import { aws } from './index.ts'
import z from 'zod'

export const AwsDbInstanceInputSchema = z.object({
  allocated_storage: ResolvableNumberSchema.optional(),
  db_name: ResolvableStringSchema.optional(),
  engine: z.union([
    z.enum(['postgres', 'mysql']),
    z.function().args(z.any()).returns(z.any()),
  ]),
  engine_version: ResolvableStringSchema.optional(),
  instance_class: ResolvableStringSchema.optional(),
  username: ResolvableStringSchema.optional(),
  password: ResolvableStringSchema.optional(),
  parameter_group_name: ResolvableStringSchema.optional(),
  subnet: ResolvableStringSchema.optional(),
})

export const AwsDbInstanceOuputSchema = z.object({
  arn: ResolvableNumberSchema.optional(),
})

export type AwsDbInstanceInputProps =
  & z.output<typeof AwsDbInstanceInputSchema>
  & IacNodeProps

export default function AwsDbInstance(props: AwsDbInstanceInputProps) {
  return (
    <RdsInstance
      {...aws(props, AwsDbInstanceInputSchema, AwsDbInstanceOuputSchema)}
    />
  )
}

{
  /*{...drawio()*/
}
{
  /*  .color('#C925D1', true)*/
}
{
  /*  .shape('mxgraph.aws4.rds_instance')*/
}
{
  /*  .extend(*/
}
{
  /*    tf({*/
}
{
  /*      _element: {*/
}
{
  /*        db_name: (node: Props) => _props.db_name || node._name,*/
}
{
  /*        allocated_storage: _props.allocated_storage,*/
}
{
  /*        engine: _props.engine,*/
}
{
  /*        engine_version: _props.engine_version,*/
}
{
  /*        instance_class: _props.instance_class,*/
}
{
  /*        username: _props.username,*/
}
{
  /*        password: _props.password,*/
}
{
  /*        parameter_group_name: _props.parameter_group_name,*/
}
{
  /*      },*/
}
{
  /*    })*/
}
{
  /*      .extend(_props),*/
}
{
  /*  )}*/
}
