import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_BUTTON_GROUP_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;fontColor=#596780;align=center;verticalAlign=middle;fontStyle=0;fontSize=14;html=1;shadow=0;dashed=0;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 5,
  _original_height: 173,
}

export function RadioButtonGroup3(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTON_GROUP_3}
      {...props}
      _style={extendStyle(RADIO_BUTTON_GROUP_3, props)}
    />
  )
}
