import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOX_GROUP_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.checkbox_2;fillColor=#0057D8;strokeColor=none;fontColor=#000000;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;labelPosition=right;verticalLabelPosition=middle;spacingLeft=10;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 2,
  _height: 173,
}

export function CheckboxGroup3(props: NodeProps) {
  return (
    <Shape
      {...CHECKBOX_GROUP_3}
      {...props}
      _style={extendStyle(CHECKBOX_GROUP_3, props)}
    />
  )
}
