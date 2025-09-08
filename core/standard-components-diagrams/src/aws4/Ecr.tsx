import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ECR = {
  _color: { color: '#ED7100', fill: true },
  _shape: 'mxgraph.aws4.ecr',
}
export function Ecr(props: DiagramNodeProps) {
  return <Shape {...ECR} {...props} />
}
