import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PILL_BADGE_SECONDARY = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#FFFFFF;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=0;fontStyle=1;fontSize=14;spacing=10;',
  },
  _width: 90,
  _height: 20,
}

export function PillBadgeSecondary(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PILL_BADGE_SECONDARY)} />
}
