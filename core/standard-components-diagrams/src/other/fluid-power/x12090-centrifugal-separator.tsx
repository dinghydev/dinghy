import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12090_CENTRIFUGAL_SEPARATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12090;points=[[0,0.5,0],[1,0.5,0]]',
  _width: 90.42,
  _height: 52.4,
}

export function X12090CentrifugalSeparator(props: DiagramNodeProps) {
  return <Shape {...X12090_CENTRIFUGAL_SEPARATOR} {...props} />
}
