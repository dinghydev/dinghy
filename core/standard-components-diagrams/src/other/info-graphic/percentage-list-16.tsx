import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_16 = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=right;verticalAlign=middle;whiteSpace=wrap;rounded=0;shadow=0;fontSize=18;spacingRight=10;',
  },
  _original_width: 10,
  _original_height: 250,
}

export function PercentageList16(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_16}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_16, props)}
    />
  )
}
