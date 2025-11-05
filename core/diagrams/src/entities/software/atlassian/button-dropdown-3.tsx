import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_DROPDOWN_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;strokeColor=none;html=1;fontColor=#596780;align=left;fontSize=12;spacingLeft=10;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 1,
  _height: 53,
}

export function ButtonDropdown3(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_DROPDOWN_3}
      {...props}
      _style={extendStyle(BUTTON_DROPDOWN_3, props)}
    />
  )
}
