import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECKBOX_GROUP_5 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;fontColor=#596780;align=center;verticalAlign=middle;fontStyle=0;fontSize=14;html=1;shadow=0;dashed=0;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 6,
  _original_height: 173,
}

export function CheckboxGroup5(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_GROUP_5}
      {...props}
      _style={extendStyle(CHECKBOX_GROUP_5, props)}
    />
  )
}
