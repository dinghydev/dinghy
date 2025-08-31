import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_CENTER = {
  _style: {
    entity:
      'points=[[0.5,0,0],[1,0.34,0],[1,1],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,1,0],[0,0.34,0],[1,0.67,0],[0,0.67,0],[0.325,0,0],[0.675,0,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.data_center;fillColor=#005073;strokeColor=none;',
  },
  _width: 100,
  _height: 70,
}

export function DataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_CENTER}
      {...props}
      _style={extendStyle(DATA_CENTER, props)}
    />
  )
}
