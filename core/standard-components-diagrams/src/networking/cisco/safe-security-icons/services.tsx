import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICES = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.services;',
  _width: 50,
  _height: 46,
}

export function Services(props: DiagramNodeProps) {
  return <Shape {...SERVICES} {...props} />
}
