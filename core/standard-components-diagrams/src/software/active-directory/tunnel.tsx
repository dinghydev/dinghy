import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUNNEL = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/tunnel.svg;',
  _width: 50,
  _height: 10,
}

export function Tunnel(props: DiagramNodeProps) {
  return <Shape {...TUNNEL} {...props} />
}
