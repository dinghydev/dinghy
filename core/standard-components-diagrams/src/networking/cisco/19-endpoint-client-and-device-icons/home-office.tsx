import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_OFFICE = {
  _style:
    'points=[[0.115,0.05,0],[0.335,0,0],[0.98,0.52,0],[1,0.71,0],[0.68,1,0],[0.065,0.76,0],[0,0.33,0],[0.68,0.33,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.home_office;fillColor=#005073;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function HomeOffice(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOME_OFFICE}
      {...props}
      _style={extendStyle(HOME_OFFICE, props)}
    />
  )
}
