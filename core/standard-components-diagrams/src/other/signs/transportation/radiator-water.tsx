import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIATOR_WATER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.radiator_water;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 94,
}

export function RadiatorWater(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIATOR_WATER}
      {...props}
      _style={extendStyle(RADIATOR_WATER, props)}
    />
  )
}
