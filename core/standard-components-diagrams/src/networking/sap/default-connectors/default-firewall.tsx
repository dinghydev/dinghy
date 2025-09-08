import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFAULT_FIREWALL = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=3;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function DefaultFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFAULT_FIREWALL}
      {...props}
      _style={extendStyle(DEFAULT_FIREWALL, props)}
    />
  )
}
