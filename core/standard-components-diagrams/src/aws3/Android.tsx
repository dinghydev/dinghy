import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANDROID = {
  _color: { color: '#AE1F23', fill: true },
  _shape: 'mxgraph.aws3.android',
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} />
}
