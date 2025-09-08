import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENTS_SHARED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.documents_shared;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function DocumentsShared(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCUMENTS_SHARED}
      {...props}
      _style={extendStyle(DOCUMENTS_SHARED, props)}
    />
  )
}
