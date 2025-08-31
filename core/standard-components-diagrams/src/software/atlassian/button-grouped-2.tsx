import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_GROUPED_2 = {
  _style:
    'rounded=1;fillColor=#0065FF;align=center;strokeColor=none;html=1;fontColor=#ffffff;fontSize=12;whiteSpace=wrap;',
  _width: 556,
  _height: 33,
}

export function ButtonGrouped2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_GROUPED_2}
      {...props}
      _style={extendStyle(BUTTON_GROUPED_2, props)}
    />
  )
}
