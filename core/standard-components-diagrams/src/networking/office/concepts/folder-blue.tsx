import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLDER_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#2072B8;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function FolderBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_BLUE}
      {...props}
      _style={extendStyle(FOLDER_BLUE, props)}
    />
  )
}
