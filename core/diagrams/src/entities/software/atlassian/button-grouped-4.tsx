import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_GROUPED_4 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;fontColor=#596780;fontSize=12',
  },
  _width: 4,
  _height: 33,
}

export function ButtonGrouped4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_GROUPED_4)} />
}
