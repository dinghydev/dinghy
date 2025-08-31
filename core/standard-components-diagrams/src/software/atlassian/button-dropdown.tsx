import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_DROPDOWN = {
  _style:
    'rounded=1;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;align=left;fontSize=12;spacingLeft=10;sketch=0;',
  _width: 0,
  _height: 33,
}

export function ButtonDropdown(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DROPDOWN}
      {...props}
      _style={extendStyle(BUTTON_DROPDOWN, props)}
    />
  )
}
