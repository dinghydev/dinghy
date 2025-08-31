import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_CLEARPASS_C1000_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_clearpass_c1000_front;',
  _width: 142,
  _height: 15,
}

export function ArubaClearpassC1000Front(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_CLEARPASS_C1000_FRONT}
      {...props}
      _style={extendStyle(ARUBA_CLEARPASS_C1000_FRONT, props)}
    />
  )
}
