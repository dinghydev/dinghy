import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCUMENT_SHARED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.document_shared;',
  },
  _width: 52,
  _height: 53,
}

export function DocumentShared(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCUMENT_SHARED}
      {...props}
      _style={extendStyle(DOCUMENT_SHARED, props)}
    />
  )
}
