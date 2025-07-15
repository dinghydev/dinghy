import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINFRAME = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/mainframe.svg;',
  _width: 50,
  _height: 47.5,
}

export function Mainframe(props: DiagramNodeProps) {
  return <Shape {...MAINFRAME} {...props} />
}
