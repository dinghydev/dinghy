import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_NORMAL = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#666666;align=center;strokeColor=#4D4D4D;fontColor=#ffffff;',
  },
  _original_width: 105.5,
  _original_height: 16.88,
}

export function ButtonNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_NORMAL}
      {...props}
      _style={extendStyle(BUTTON_NORMAL, props)}
    />
  )
}
