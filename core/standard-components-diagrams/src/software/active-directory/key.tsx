import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/key.svg;strokeColor=none;',
  _width: 50,
  _height: 37,
}

export function Key(props: DiagramNodeProps) {
  return <Shape {...KEY} {...props} />
}
