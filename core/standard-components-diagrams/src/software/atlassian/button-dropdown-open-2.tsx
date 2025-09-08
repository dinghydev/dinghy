import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_DROPDOWN_OPEN_2 = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=4;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 2,
  _original_height: 200,
}

export function ButtonDropdownOpen2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DROPDOWN_OPEN_2}
      {...props}
      _style={extendStyle(BUTTON_DROPDOWN_OPEN_2, props)}
    />
  )
}
