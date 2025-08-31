import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_BUTTON_GROUP_2 = {
  _style:
    'shape=ellipse;fillColor=#ffffff;strokeColor=#0057D8;strokeWidth=4;fontColor=#000000;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;labelPosition=right;verticalLabelPosition=middle;spacingLeft=10;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 2,
  _height: 173,
}

export function RadioButtonGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_BUTTON_GROUP_2}
      {...props}
      _style={extendStyle(RADIO_BUTTON_GROUP_2, props)}
    />
  )
}
