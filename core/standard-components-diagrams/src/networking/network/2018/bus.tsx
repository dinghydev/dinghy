import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUS = {
  _style:
    'html=1;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.bus;gradientColor=none;gradientDirection=north;fontColor=#ffffff;perimeter=backbonePerimeter;backboneSize=20;',
  _width: 260,
  _height: 140,
}

export function Bus(props: DiagramNodeProps) {
  return <Shape {...BUS} {...props} />
}
