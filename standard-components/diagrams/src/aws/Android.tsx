import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANDROID = {
  _color: { color: '#AE1F23', fill: true },
  _shape: 'mxgraph.aws3.android',
}

export default function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} />
}
