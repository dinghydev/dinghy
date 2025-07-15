import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.firewall;',
  _width: 49.5,
  _height: 35,
}

export function Firewall(props: DiagramNodeProps) {
  return <Shape {...FIREWALL} {...props} />
}
