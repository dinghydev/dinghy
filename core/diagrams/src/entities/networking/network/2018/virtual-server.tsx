import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.virtual_server;',
  },
  _width: 110,
  _height: 120,
}

export function VirtualServer(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_SERVER, props)}
    />
  )
}
