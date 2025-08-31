import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12410_SINGLE_STAGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12410;points=[[0.59,0,0],[0.725,1,0],[1,0.555,0]]',
  _width: 204.68,
  _height: 168.08,
}

export function X12410SingleStage(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12410_SINGLE_STAGE}
      {...props}
      _style={extendStyle(X12410_SINGLE_STAGE, props)}
    />
  )
}
