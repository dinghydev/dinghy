import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12240_LUBRICATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12240;points=[[0,0.5,0],[1,0.5,0]]',
  _width: 111.7,
  _height: 52.4,
}

export function X12240Lubricator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12240_LUBRICATOR}
      {...props}
      _style={extendStyle(X12240_LUBRICATOR, props)}
    />
  )
}
