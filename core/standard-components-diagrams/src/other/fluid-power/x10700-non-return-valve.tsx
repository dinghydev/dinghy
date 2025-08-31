import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10700_NON_RETURN_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10700;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 18.96,
  _height: 56.04,
}

export function X10700NonReturnValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10700_NON_RETURN_VALVE}
      {...props}
      _style={extendStyle(X10700_NON_RETURN_VALVE, props)}
    />
  )
}
