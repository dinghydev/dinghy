import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RDS_INSTANCE = {
  _color: { color: '#C925D1', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.rds_instance',
}

export function RdsInstance(props: DiagramNodeProps) {
  return <Shape {...RDS_INSTANCE} {...props} />
}
