import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_10 = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#F2F3F5;strokeColor=none;fontColor=#596780;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=1;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 7,
  _original_height: 230,
}

export function Table10(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_10} {...props} _style={extendStyle(TABLE_10, props)} />
  )
}
