import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/security.svg;',
  _width: 31.5,
  _height: 50,
}

export function Security(props: DiagramNodeProps) {
  return <Shape {...SECURITY} {...props} />
}
