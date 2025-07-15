import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet;fillColor=#D2D3D3;gradientColor=none;',
  _width: 79.5,
  _height: 79.5,
}

export function Internet(props: DiagramNodeProps) {
  return <Shape {...INTERNET} {...props} />
}
