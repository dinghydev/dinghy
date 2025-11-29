import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_19 = {
  _style: {
    entity:
      'shape=mxgraph.basic.oval_callout;fillColor=#A5ADBA;strokeColor=none;fontColor=#596780;align=left;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=0;html=1;labelPosition=right;verticalLabelPosition=middle;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 30,
  _height: 230,
}

export function Table19(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_19)} />
}
