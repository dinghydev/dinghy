import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEGEND = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;html=1;strokeColor=none;strokeWidth=1.5;arcSize=16;fillColor=#F5F6F7;perimeterSpacing=0;imageHeight=24;absoluteArcSize=1;points=[];connectable=0;container=0;align=left;verticalAlign=top;fontSize=12;fontStyle=1;spacingTop=5;spacingLeft=8;',
  },
  _width: 0,
  _height: 125,
}

export function Legend(props: DiagramNodeProps) {
  return <Shape {...LEGEND} {...props} _style={extendStyle(LEGEND, props)} />
}
