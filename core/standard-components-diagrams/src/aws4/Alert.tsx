import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERT = {
  _color: { color: '#232F3D', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.alert',
}

export function Alert(props: DiagramNodeProps) {
  return <Shape {...ALERT} {...props} />
}
