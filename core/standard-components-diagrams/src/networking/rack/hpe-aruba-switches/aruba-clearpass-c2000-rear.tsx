import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_CLEARPASS_C2000_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.security.aruba_clearpass_c2000_rear;',
  _width: 142,
  _height: 15,
}

export function ArubaClearpassC2000Rear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_CLEARPASS_C2000_REAR}
      {...props}
      _style={extendStyle(ARUBA_CLEARPASS_C2000_REAR, props)}
    />
  )
}
