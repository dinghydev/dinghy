import {
  NodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { awsProps } from './utils/awsProps.ts'
import z from 'zod'
import { RdsInstance } from '@dinghy/diagrams/entitiesAwsDatabase'

export const AwsDbInstanceInputSchema = z.object({
  allocated_storage: ResolvableNumberSchema.optional(),
  db_name: ResolvableStringSchema.optional(),
  engine: z.union([
    z.enum(['postgres', 'mysql']).optional(),
    // z.string().optional(),
    z.function({
      input: [z.any()],
      output: z.any(),
    }),
  ]),
  engine_version: ResolvableStringSchema.optional(),
  instance_class: ResolvableStringSchema.optional(),
  username: ResolvableStringSchema.optional(),
  password: ResolvableStringSchema.optional(),
  parameter_container_name: ResolvableStringSchema.optional(),
  subnet: ResolvableStringSchema.optional(),
})

export const AwsDbInstanceOuputSchema = z.object({
  arn: ResolvableNumberSchema.optional(),
})

export type AwsDbInstanceInputProps =
  & z.output<typeof AwsDbInstanceInputSchema>
  & NodeProps

export default function AwsDbInstance(props: AwsDbInstanceInputProps) {
  return (
    <RdsInstance
      {...awsProps(
        props,
        AwsDbInstanceInputSchema,
        AwsDbInstanceOuputSchema,
      )}
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
  /*        parameter_container_name: _props.parameter_container_name,*/
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
