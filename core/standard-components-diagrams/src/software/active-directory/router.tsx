import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/router.svg;',
  _width: 50,
  _height: 38,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} />
}
