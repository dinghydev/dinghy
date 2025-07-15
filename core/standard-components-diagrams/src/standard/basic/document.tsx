import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.document',
  _width: 100,
  _height: 100,
}

export function Document(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT} {...props} />
}
