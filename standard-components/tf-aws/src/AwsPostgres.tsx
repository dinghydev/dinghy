import AwsDbInstance, { AwsDbInstanceInputSchema } from './AwsDbInstance.js'
import {
  RDS_POSTGRESQL_INSTANCE,
} from '@reactiac/standard-components-diagrams'
import { IacNodeProps } from '@reactiac/base-components'
import z from 'zod'

export const AwsPostgresSchema = AwsDbInstanceInputSchema.omit({ engine: true })
export type AwsPostgresProps = z.infer<typeof AwsPostgresSchema> & IacNodeProps

export default function AwsPostgres(props: AwsPostgresProps) {
  return (
    <AwsDbInstance
      engine={'postgres'}
      {...RDS_POSTGRESQL_INSTANCE}
      {...props}
    />
  )
}
