import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOLDER_SHARED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder_shared;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function FolderShared(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FOLDER_SHARED)} />
}
