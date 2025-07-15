import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12210_ADSORBER_FILTER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12210;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  _width: 90.42,
  _height: 71.34,
}

export function X12210AdsorberFilter(props: DiagramNodeProps) {
  return <Shape {...X12210_ADSORBER_FILTER} {...props} />
}
