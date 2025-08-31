import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_OPEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder_open;',
  },
  _width: 56,
  _height: 43,
}

export function FolderOpen(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_OPEN}
      {...props}
      _style={extendStyle(FOLDER_OPEN, props)}
    />
  )
}
