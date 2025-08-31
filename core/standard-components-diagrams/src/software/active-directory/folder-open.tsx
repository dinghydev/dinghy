import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_OPEN = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/folder_open.svg;strokeColor=none;',
  },
  _width: 46,
  _height: 50,
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
