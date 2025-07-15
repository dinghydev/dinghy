import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTI_DOCUMENT = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.multi-document;whiteSpace=wrap;',
  _width: 88,
  _height: 60,
}

export function MultiDocument(props: DiagramNodeProps) {
  return <Shape {...MULTI_DOCUMENT} {...props} />
}
