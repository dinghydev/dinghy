import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOOLTIP = {
  _style: {
    entity:
      'rounded=1;arcSize=10;fillColor=#172B4D;strokeColor=none;html=1;fontSize=11;align=center;fontColor=#ffffff;fontStyle=0;fontSize=11;sketch=0;',
  },
  _width: 65,
  _height: 20,
}

export function Tooltip(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOOLTIP)} />
}
