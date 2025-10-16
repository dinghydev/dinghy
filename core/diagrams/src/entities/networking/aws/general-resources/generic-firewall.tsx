import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERIC_FIREWALL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.generic_firewall;',
  },
  _original_width: 78,
  _original_height: 66,
}

export function GenericFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_FIREWALL}
      {...props}
      _style={extendStyle(GENERIC_FIREWALL, props)}
    />
  )
}
