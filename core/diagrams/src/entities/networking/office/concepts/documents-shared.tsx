import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENTS_SHARED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.documents_shared;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function DocumentsShared(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOCUMENTS_SHARED)} />
}
