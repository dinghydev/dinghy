import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DYNAMODB = {
  _shape: 'mxgraph.aws4.dynamodb',
  _color: { color: '#C925D1', fill: true },
}

export function Dynamodb(props: DiagramNodeProps) {
  return <Shape {...DYNAMODB} {...props} />
}
