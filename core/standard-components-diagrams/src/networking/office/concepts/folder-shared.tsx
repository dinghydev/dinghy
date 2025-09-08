import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLDER_SHARED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder_shared;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function FolderShared(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_SHARED}
      {...props}
      _style={extendStyle(FOLDER_SHARED, props)}
    />
  )
}
