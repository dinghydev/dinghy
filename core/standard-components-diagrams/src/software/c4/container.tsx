import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;fontSize=11;labelBackgroundColor=none;fillColor=#23A2D9;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#0E7DAD;metaEdit=1;resizable=0;points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];',
  },
  _width: 0,
  _height: 120,
}

export function Container(props: DiagramNodeProps) {
  return (
    <Shape {...CONTAINER} {...props} _style={extendStyle(CONTAINER, props)} />
  )
}
