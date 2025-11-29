import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_27 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=#EDEEEF;fontSize=11;fontColor=#596780;rounded=1;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 9,
  _height: 230,
}

export function Table27(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_27)} />
}
