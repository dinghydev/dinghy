import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCUMENTS_SHARED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.documents_shared;',
  _width: 58,
  _height: 59,
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
