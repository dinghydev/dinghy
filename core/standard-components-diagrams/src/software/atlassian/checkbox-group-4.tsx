import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_GROUP_4 = {
  _style: {
    entity:
      'rounded=1;fillColor=#0057D8;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;fontStyle=0;fontSize=14;html=1;shadow=0;dashed=0;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 5,
  _height: 173,
}

export function CheckboxGroup4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_GROUP_4}
      {...props}
      _style={extendStyle(CHECKBOX_GROUP_4, props)}
    />
  )
}
