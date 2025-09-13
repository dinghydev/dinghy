import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_23 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=right;fontColor=#596780;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 2,
  _height: 230,
}

export function Table23(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_23} {...props} _style={extendStyle(TABLE_23, props)} />
  )
}
