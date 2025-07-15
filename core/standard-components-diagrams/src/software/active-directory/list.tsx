import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/list.svg;',
  _width: 35,
  _height: 50,
}

export function List(props: DiagramNodeProps) {
  return <Shape {...LIST} {...props} />
}
