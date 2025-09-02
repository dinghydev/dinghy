import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYBRID_VOIP_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.hybrid_voip_gateway;',
  },
  _original_width: 59,
  _original_height: 38,
}

export function HybridVoipGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYBRID_VOIP_GATEWAY}
      {...props}
      _style={extendStyle(HYBRID_VOIP_GATEWAY, props)}
    />
  )
}
