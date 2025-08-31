import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WATER_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.water_cooler;',
  },
  _width: 40,
  _height: 40,
}

export function WaterCooler(props: DiagramNodeProps) {
  return (
    <Shape
      {...WATER_COOLER}
      {...props}
      _style={extendStyle(WATER_COOLER, props)}
    />
  )
}
