import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WRITING = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/writing.svg;strokeColor=none;',
  _width: 49,
  _height: 50,
}

export function Writing(props: DiagramNodeProps) {
  return <Shape {...WRITING} {...props} />
}
