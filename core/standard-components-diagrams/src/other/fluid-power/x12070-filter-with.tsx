import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12070_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12070;points=[[0.225,0,0],[0.225,1,0]]',
  _width: 116.84,
  _height: 128.54,
}

export function X12070FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12070_FILTER_WITH}
      {...props}
      _style={extendStyle(X12070_FILTER_WITH, props)}
    />
  )
}
