import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} _style={extendStyle(CLIENT, props)} />
}
