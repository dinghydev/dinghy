import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUS_3 = {
  _style:
    'html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.bus;gradientColor=none;gradientDirection=north;fontColor=#ffffff;perimeter=backbonePerimeter;backboneSize=20;',
  _width: 200,
  _height: 20,
}

export function Bus3(props: DiagramNodeProps) {
  return <Shape {...BUS_3} {...props} />
}
