import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_DROPDOWN_OPEN = {
  _style: {
    entity:
      'rounded=1;fillColor=#253858;strokeColor=none;html=1;fontColor=#ffffff;align=left;fontSize=12;spacingLeft=10;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 1,
  _original_height: 200,
}

export function ButtonDropdownOpen(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DROPDOWN_OPEN}
      {...props}
      _style={extendStyle(BUTTON_DROPDOWN_OPEN, props)}
    />
  )
}
