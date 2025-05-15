import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECS = {
  _color: { color: '#ED7100', fill: true },
  _shape: 'mxgraph.aws4.ecs',
}
export function Ecs(props: DiagramNodeProps) {
  return <Shape {...ECS} {...props} />
}
