import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12370_AIR_RESERVOIR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12370;points=[[0,0.5,0],[1,0.5,0]]',
  _width: 112.54,
  _height: 37.14,
}

export function X12370AirReservoir(props: DiagramNodeProps) {
  return <Shape {...X12370_AIR_RESERVOIR} {...props} />
}
