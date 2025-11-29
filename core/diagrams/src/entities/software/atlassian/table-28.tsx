import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_28 = {
  _style: {
    entity:
      'rounded=1;arcSize=23;fillColor=#42526E;strokeColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 12,
  _height: 230,
}

export function Table28(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_28)} />
}
