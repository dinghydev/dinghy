import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUS = {
  _style: {
    entity:
      'html=1;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.bus;gradientColor=none;gradientDirection=north;fontColor=#ffffff;perimeter=backbonePerimeter;backboneSize=20;',
  },
  _original_width: 260,
  _original_height: 140,
}

export function Bus(props: DiagramNodeProps) {
  return <Shape {...BUS} {...props} _style={extendStyle(BUS, props)} />
}
