import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_COMPACT = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12;sketch=0;',
  },
  _width: 0,
  _height: 33,
}

export function ButtonCompact(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_COMPACT)} />
}
