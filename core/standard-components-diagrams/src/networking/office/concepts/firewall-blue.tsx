import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.firewall;fillColor=#2072B8;',
  _width: 47,
  _height: 43,
}

export function FirewallBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_BLUE}
      {...props}
      _style={extendStyle(FIREWALL_BLUE, props)}
    />
  )
}
