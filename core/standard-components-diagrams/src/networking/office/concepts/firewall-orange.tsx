import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.firewall;fillColor=#DA4026;',
  },
  _original_width: 47,
  _original_height: 43,
}

export function FirewallOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_ORANGE}
      {...props}
      _style={extendStyle(FIREWALL_ORANGE, props)}
    />
  )
}
