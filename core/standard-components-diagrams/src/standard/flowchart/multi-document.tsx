import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_DOCUMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.multi-document;whiteSpace=wrap;',
  },
  _original_width: 88,
  _original_height: 60,
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
