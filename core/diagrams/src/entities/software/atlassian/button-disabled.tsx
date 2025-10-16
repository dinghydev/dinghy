import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_DISABLED = {
  _style: {
    entity:
      'rounded=1;align=center;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#A5ADBA;fontSize=12',
  },
  _width: 0,
  _height: 33,
}

export function ButtonDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_DISABLED}
      {...props}
      _style={extendStyle(BUTTON_DISABLED, props)}
    />
  )
}
