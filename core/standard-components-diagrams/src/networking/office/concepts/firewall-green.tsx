import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_GREEN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.firewall;fillColor=#7FBA42;',
  _width: 47,
  _height: 43,
}

export function FirewallGreen(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_GREEN} {...props} />
}
