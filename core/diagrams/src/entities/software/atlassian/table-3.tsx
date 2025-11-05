import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_3 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap;fontStyle=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 4,
  _height: 230,
}

export function Table3(props: NodeProps) {
  return <Shape {...TABLE_3} {...props} _style={extendStyle(TABLE_3, props)} />
}
