import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOME = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/home.svg;',
  _width: 50,
  _height: 48.5,
}

export function Home(props: DiagramNodeProps) {
  return <Shape {...HOME} {...props} />
}
