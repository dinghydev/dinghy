import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11370_HYDROSTATIC_TRANSMISSION = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11370;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 222.58,
  _height: 167.82,
}

export function X11370HydrostaticTransmission(props: DiagramNodeProps) {
  return <Shape {...X11370_HYDROSTATIC_TRANSMISSION} {...props} />
}
