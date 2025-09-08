import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=3;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Firewall3(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL_3} {...props} _style={extendStyle(FIREWALL_3, props)} />
  )
}
