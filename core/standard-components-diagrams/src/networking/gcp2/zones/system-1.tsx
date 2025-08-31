import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_1 = {
  _style: {
    entity:
      'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[1,1,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];rounded=1;absoluteArcSize=1;arcSize=2;html=1;strokeColor=none;gradientColor=none;shadow=0;dashed=0;fontSize=12;fontColor=#9E9E9E;align=left;verticalAlign=top;spacing=10;spacingTop=-4;whiteSpace=wrap;fillColor=#F1F8E9;',
  },
  _width: 120,
  _height: 70,
}

export function System1(props: DiagramNodeProps) {
  return (
    <Shape {...SYSTEM_1} {...props} _style={extendStyle(SYSTEM_1, props)} />
  )
}
