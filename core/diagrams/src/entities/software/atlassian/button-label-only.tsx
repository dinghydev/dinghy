import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_LABEL_ONLY = {
  _style: {
    entity:
      'rounded=1;align=center;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12',
  },
  _width: 0,
  _height: 33,
}

export function ButtonLabelOnly(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_LABEL_ONLY)} />
}
