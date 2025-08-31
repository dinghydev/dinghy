import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATELLITE_DISH = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.satellite_dish;',
  },
  _width: 90,
  _height: 100,
}

export function SatelliteDish(props: DiagramNodeProps) {
  return (
    <Shape
      {...SATELLITE_DISH}
      {...props}
      _style={extendStyle(SATELLITE_DISH, props)}
    />
  )
}
