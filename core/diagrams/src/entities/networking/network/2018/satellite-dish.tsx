import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SATELLITE_DISH = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.satellite_dish;',
  },
  _original_width: 90,
  _original_height: 100,
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
