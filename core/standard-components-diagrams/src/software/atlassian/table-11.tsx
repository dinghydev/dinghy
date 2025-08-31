import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_11 = {
  _style:
    'shape=ellipse;fillColor=#F0F2F5;strokeColor=none;fontColor=#596780;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=0;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 8,
  _height: 230,
}

export function Table11(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_11} {...props} _style={extendStyle(TABLE_11, props)} />
  )
}
