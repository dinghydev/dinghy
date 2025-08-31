import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_20 = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#A5ADBA;strokeColor=#ffffff;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 34,
  _height: 230,
}

export function Table20(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_20} {...props} _style={extendStyle(TABLE_20, props)} />
  )
}
