import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGICAL_FIREWALL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.logical_firewall;',
  _width: 48.5,
  _height: 50,
}

export function LogicalFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGICAL_FIREWALL}
      {...props}
      _style={extendStyle(LOGICAL_FIREWALL, props)}
    />
  )
}
