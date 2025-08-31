import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_27 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=#EDEEEF;fontSize=11;fontColor=#596780;rounded=1;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 9,
  _height: 230,
}

export function Table27(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_27} {...props} _style={extendStyle(TABLE_27, props)} />
  )
}
