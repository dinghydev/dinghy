import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_33 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontSize=12;fontColor=#0057D8;align=left;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 42,
  _height: 230,
}

export function Table33(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_33)} />
}
