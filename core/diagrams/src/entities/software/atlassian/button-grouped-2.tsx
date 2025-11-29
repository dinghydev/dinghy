import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_GROUPED_2 = {
  _style: {
    entity:
      'rounded=1;fillColor=#0065FF;align=center;strokeColor=none;html=1;fontColor=#ffffff;fontSize=12;whiteSpace=wrap;',
  },
  _width: 556,
  _height: 33,
}

export function ButtonGrouped2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_GROUPED_2)} />
}
