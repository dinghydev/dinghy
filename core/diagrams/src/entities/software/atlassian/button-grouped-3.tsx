import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_GROUPED_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;fontColor=#596780;fontSize=12;whiteSpace=wrap;',
  },
  _width: 1,
  _height: 33,
}

export function ButtonGrouped3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_GROUPED_3)} />
}
