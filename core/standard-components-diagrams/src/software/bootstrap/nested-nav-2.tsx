import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NESTED_NAV_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=14;fontColor=#323232;html=1;whiteSpace=wrap;verticalAlign=top;spacingRight=25;',
  },
  _original_width: 1,
  _original_height: 330,
}

export function NestedNav2(props: DiagramNodeProps) {
  return (
    <Shape
      {...NESTED_NAV_2}
      {...props}
      _style={extendStyle(NESTED_NAV_2, props)}
    />
  )
}
