import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.firewall;fillColor=#CCCBCB;',
  },
  _original_width: 47,
  _original_height: 43,
}

export function FirewallGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_GHOSTED}
      {...props}
      _style={extendStyle(FIREWALL_GHOSTED, props)}
    />
  )
}
