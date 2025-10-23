import AwsDbInstance, { AwsDbInstanceInputSchema } from './AwsDbInstance.tsx'
import { POSTGRE_SQL_INSTANCE } from '@dinghy/diagrams/entitiesAwsDatabase'
import { IacNodeProps } from '@dinghy/base-components'
import z from 'zod'

export const AwsPostgresSchema = AwsDbInstanceInputSchema.omit({ engine: true })
export type AwsPostgresProps = z.output<typeof AwsPostgresSchema> & IacNodeProps

export default function AwsPostgres(props: AwsPostgresProps) {
  return (
    <AwsDbInstance
      engine='postgres'
      {...POSTGRE_SQL_INSTANCE}
      {...props}
    />
  )
}
