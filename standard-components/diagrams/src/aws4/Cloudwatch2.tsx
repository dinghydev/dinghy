import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDWATCH_2 = {
  _color: { color: '#E7157B', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.cloudwatch_2',
}

export function Cloudwatch2(props: DiagramNodeProps) {
  return <Shape {...CLOUDWATCH_2} {...props} />
}
