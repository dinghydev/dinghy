import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_STANDARD = {
  _style: {
    entity:
      'rounded=1;align=center;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12;sketch=0;',
  },
  _width: 0,
  _height: 33,
}

export function ButtonStandard(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_STANDARD}
      {...props}
      _style={extendStyle(BUTTON_STANDARD, props)}
    />
  )
}
