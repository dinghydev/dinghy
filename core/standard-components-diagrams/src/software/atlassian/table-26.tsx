import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_26 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontSize=12;fontColor=#596780;align=left;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 8,
  _height: 230,
}

export function Table26(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_26} {...props} _style={extendStyle(TABLE_26, props)} />
  )
}
