import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLDER_OPEN = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/folder_open.svg;strokeColor=none;',
  },
  _original_width: 46,
  _original_height: 50,
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
