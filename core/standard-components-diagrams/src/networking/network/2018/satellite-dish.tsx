import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SATELLITE_DISH = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.satellite_dish;',
  _width: 90,
  _height: 100,
}

export function SatelliteDish(props: DiagramNodeProps) {
  return <Shape {...SATELLITE_DISH} {...props} />
}
