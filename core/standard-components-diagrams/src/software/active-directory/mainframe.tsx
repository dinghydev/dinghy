import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINFRAME = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/mainframe.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 47.5,
}

export function Mainframe(props: DiagramNodeProps) {
  return (
    <Shape {...MAINFRAME} {...props} _style={extendStyle(MAINFRAME, props)} />
  )
}
