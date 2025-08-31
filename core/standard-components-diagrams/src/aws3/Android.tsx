import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANDROID = {
  _color: { color: '#AE1F23', fill: true },
  _shape: 'mxgraph.aws3.android',
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} />
}
