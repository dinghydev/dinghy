import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/tunnel.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 10,
}

export function Tunnel(props: DiagramNodeProps) {
  return <Shape {...TUNNEL} {...props} _style={extendStyle(TUNNEL, props)} />
}
