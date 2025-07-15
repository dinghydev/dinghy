import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.document2;whiteSpace=wrap;size=0.25;',
  _width: 100,
  _height: 60,
}

export function Document(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT} {...props} />
}
