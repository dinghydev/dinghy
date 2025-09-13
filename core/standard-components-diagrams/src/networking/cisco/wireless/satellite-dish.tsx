import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SATELLITE_DISH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.satellite_dish;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 99,
  _height: 74,
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
