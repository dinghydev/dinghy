import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIX_FIREWALL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.pix_firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 51,
}

export function PixFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...PIX_FIREWALL}
      {...props}
      _style={extendStyle(PIX_FIREWALL, props)}
    />
  )
}
