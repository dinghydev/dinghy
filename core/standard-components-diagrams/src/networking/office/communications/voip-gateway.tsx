import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOIP_GATEWAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.voip_gateway;',
  _width: 51,
  _height: 15,
}

export function VoipGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOIP_GATEWAY}
      {...props}
      _style={extendStyle(VOIP_GATEWAY, props)}
    />
  )
}
