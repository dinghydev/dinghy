import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_7 = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#EA4232;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=1;html=1;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 9,
  _height: 230,
}

export function Table7(props: DiagramNodeProps) {
  return <Shape {...TABLE_7} {...props} _style={extendStyle(TABLE_7, props)} />
}
