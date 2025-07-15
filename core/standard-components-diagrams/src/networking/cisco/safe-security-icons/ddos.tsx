import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DDOS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ddos;',
  _width: 50,
  _height: 50,
}

export function Ddos(props: DiagramNodeProps) {
  return <Shape {...DDOS} {...props} />
}
