import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECS = {
  _color: { color: '#ED7100', fill: true },
  _shape: 'mxgraph.aws4.ecs',
}
export function Ecs(props: DiagramNodeProps) {
  return <Shape {...ECS} {...props} />
}
