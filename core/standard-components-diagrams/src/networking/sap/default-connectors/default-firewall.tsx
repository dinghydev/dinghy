import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_FIREWALL = {
  _style:
    'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=3;',
  _width: 120,
  _height: 0,
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
