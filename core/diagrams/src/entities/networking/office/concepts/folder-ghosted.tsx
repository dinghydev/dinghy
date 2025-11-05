import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOLDER_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#CCCBCB;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function FolderGhosted(props: NodeProps) {
  return (
    <Shape
      {...FOLDER_GHOSTED}
      {...props}
      _style={extendStyle(FOLDER_GHOSTED, props)}
    />
  )
}
