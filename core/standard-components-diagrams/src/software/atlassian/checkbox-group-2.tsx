import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_GROUP_2 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F0F2F5;strokeColor=#D8DCE3;fontColor=#000000;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;labelPosition=right;verticalLabelPosition=middle;spacingLeft=10;html=1;shadow=0;dashed=0;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 1,
  _original_height: 173,
}

export function CheckboxGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_GROUP_2}
      {...props}
      _style={extendStyle(CHECKBOX_GROUP_2, props)}
    />
  )
}
