import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_22 = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#172B4D;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=0;html=1;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 36,
  _height: 230,
}

export function Table22(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_22} {...props} _style={extendStyle(TABLE_22, props)} />
  )
}
