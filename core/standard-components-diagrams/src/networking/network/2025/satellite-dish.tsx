import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATELLITE_DISH = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.satellite_dish;network2IconXOffset=-0.0067;network2IconYOffset=0.0022;network2IconW=1.0065;network2IconH=0.9957;',
  _width: 50.324999999999996,
  _height: 49.785000000000004,
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
