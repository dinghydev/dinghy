import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#DA4026;',
  },
  _width: 50,
  _height: 45,
}

export function FolderOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_ORANGE}
      {...props}
      _style={extendStyle(FOLDER_ORANGE, props)}
    />
  )
}
