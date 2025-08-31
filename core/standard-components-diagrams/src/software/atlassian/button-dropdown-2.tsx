import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_DROPDOWN_2 = {
  _style:
    'rounded=1;fillColor=none;strokeColor=none;html=1;fontColor=#596780;align=left;fontSize=11;spacingLeft=10;fontSize=11;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 100,
  _height: 53,
}

export function ButtonDropdown2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DROPDOWN_2}
      {...props}
      _style={extendStyle(BUTTON_DROPDOWN_2, props)}
    />
  )
}
