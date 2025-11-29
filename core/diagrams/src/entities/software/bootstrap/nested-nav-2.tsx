import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NESTED_NAV_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=14;fontColor=#323232;html=1;whiteSpace=wrap;verticalAlign=top;spacingRight=25;',
  },
  _width: 1,
  _height: 330,
}

export function NestedNav2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NESTED_NAV_2)} />
}
