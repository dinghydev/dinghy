import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_32 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=#CCE0FF;fontSize=11;fontColor=#3384FF;rounded=1;html=1;align=center;fontStyle=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 19,
  _height: 230,
}

export function Table32(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_32)} />
}
