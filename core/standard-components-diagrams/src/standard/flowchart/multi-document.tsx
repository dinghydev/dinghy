import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_DOCUMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.multi-document;whiteSpace=wrap;',
  },
  _width: 88,
  _height: 60,
}

export function MultiDocument(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_DOCUMENT}
      {...props}
      _style={extendStyle(MULTI_DOCUMENT, props)}
    />
  )
}
