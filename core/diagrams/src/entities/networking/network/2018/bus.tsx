import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUS = {
  _style: {
    entity:
      'html=1;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.bus;gradientColor=none;gradientDirection=north;fontColor=#ffffff;perimeter=backbonePerimeter;backboneSize=20;',
  },
  _width: 260,
  _height: 140,
}

export function Bus(props: NodeProps) {
  return <Shape {...BUS} {...props} _style={extendStyle(BUS, props)} />
}
