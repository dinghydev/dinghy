import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOLD_BADGE = {
  _style: {
    entity:
      'rounded=1;fillColor=#0065FF;strokeColor=none;html=1;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=18;fontStyle=1;arcSize=50;sketch=0;',
  },
  _width: 40,
  _height: 25,
}

export function BoldBadge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOLD_BADGE)} />
}
