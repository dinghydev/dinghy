import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_LIBRARY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.list_library;',
  },
  _original_width: 52,
  _original_height: 48,
}

export function ListLibrary(props: NodeProps) {
  return (
    <Shape
      {...LIST_LIBRARY}
      {...props}
      _style={extendStyle(LIST_LIBRARY, props)}
    />
  )
}
