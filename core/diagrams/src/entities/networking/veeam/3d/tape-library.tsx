import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_LIBRARY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_library;',
  },
  _original_width: 62,
  _original_height: 74,
}

export function TapeLibrary(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_LIBRARY)} />
}
