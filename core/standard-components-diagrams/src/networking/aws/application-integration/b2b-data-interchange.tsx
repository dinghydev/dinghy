import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const B2B_DATA_INTERCHANGE = {
  _style:
    'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.b2b_data_interchange;',
  _width: 60,
  _height: 60,
}

export function B2bDataInterchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...B2B_DATA_INTERCHANGE}
      {...props}
      _style={extendStyle(B2B_DATA_INTERCHANGE, props)}
    />
  )
}
