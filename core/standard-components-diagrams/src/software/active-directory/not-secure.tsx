import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOT_SECURE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/not_secure.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
}

export function NotSecure(props: DiagramNodeProps) {
  return <Shape {...NOT_SECURE} {...props} />
}
