import type { DiagramNodeProps } from '@diac/base-components'
import { RdsInstance } from './RdsInstance.tsx'

export const RDS_POSTGRESQL_INSTANCE = {
  _shape: 'mxgraph.aws4.rds_postgresql_instance',
}

export function RdsPostgresqlInstance(props: DiagramNodeProps) {
  return <RdsInstance {...RDS_POSTGRESQL_INSTANCE} {...props} />
}
