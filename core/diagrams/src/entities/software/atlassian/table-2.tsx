import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#59ADDF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=1;html=1;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 3,
  _height: 230,
}

export function Table2(props: NodeProps) {
  return <Shape {...TABLE_2} {...props} _style={extendStyle(TABLE_2, props)} />
}
