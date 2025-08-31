import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_4 = {
  _style: {
    entity:
      'shape=mxgraph.ios7.icons.user;fillColor=#ffffff;strokeColor=#253858;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 5,
  _height: 230,
}

export function Table4(props: DiagramNodeProps) {
  return <Shape {...TABLE_4} {...props} _style={extendStyle(TABLE_4, props)} />
}
