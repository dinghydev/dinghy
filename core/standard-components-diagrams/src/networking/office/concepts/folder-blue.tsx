import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#2072B8;',
  _width: 50,
  _height: 45,
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
