import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.document2;whiteSpace=wrap;size=0.25;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Document(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENT} {...props} _style={extendStyle(DOCUMENT, props)} />
  )
}
