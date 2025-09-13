import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_6 = {
  _style: {
    entity:
      'shape=mxgraph.office.security.lock_protected;fillColor=#5E6C84;strokeColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 8,
  _height: 230,
}

export function Table6(props: DiagramNodeProps) {
  return <Shape {...TABLE_6} {...props} _style={extendStyle(TABLE_6, props)} />
}
