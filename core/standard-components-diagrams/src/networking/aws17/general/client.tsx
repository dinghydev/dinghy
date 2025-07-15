import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIENT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#D2D3D3;gradientColor=none;',
  _width: 63,
  _height: 63,
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} />
}
