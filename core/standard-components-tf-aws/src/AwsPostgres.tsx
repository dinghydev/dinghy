import AwsDbInstance, { AwsDbInstanceInputSchema } from './AwsDbInstance.tsx'
import { aws4 } from '../../standard-components-diagrams/src/index.ts'
import { IacNodeProps } from '@dinghy/base-components'
import z from 'zod'

export const AwsPostgresSchema = AwsDbInstanceInputSchema.omit({ engine: true })
export type AwsPostgresProps = z.input<typeof AwsPostgresSchema> & IacNodeProps

export default function AwsPostgres(props: AwsPostgresProps) {
  return (
    <AwsDbInstance
      engine='postgres'
      {...aws4.RDS_POSTGRESQL_INSTANCE}
      {...props}
    />
  )
}
