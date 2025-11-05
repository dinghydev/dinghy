import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOLDER_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#DA4026;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function FolderOrange(props: NodeProps) {
  return (
    <Shape
      {...FOLDER_ORANGE}
      {...props}
      _style={extendStyle(FOLDER_ORANGE, props)}
    />
  )
}
