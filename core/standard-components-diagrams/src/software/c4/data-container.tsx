import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_CONTAINER = {
  _style: {
    entity:
      'shape=cylinder3;size=15;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#23A2D9;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;',
  },
  _width: 0,
  _height: 120,
}

export function DataContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_CONTAINER}
      {...props}
      _style={extendStyle(DATA_CONTAINER, props)}
    />
  )
}
