import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_4 = {
  _style: {
    entity:
      'shape=mxgraph.ios7.icons.user;fillColor=#ffffff;strokeColor=#253858;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 5,
  _height: 230,
}

export function Table4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_4)} />
}
