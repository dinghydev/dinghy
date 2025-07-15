import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_ROUTER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_router.svg;',
  _width: 40,
  _height: 50,
}

export function WindowsRouter(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_ROUTER} {...props} />
}
