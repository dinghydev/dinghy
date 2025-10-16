import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARUBA_CLEARPASS_C3000_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.security.aruba_clearpass_c3000_rear;',
  },
  _width: 142,
  _height: 15,
}

export function ArubaClearpassC3000Rear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_CLEARPASS_C3000_REAR}
      {...props}
      _style={extendStyle(ARUBA_CLEARPASS_C3000_REAR, props)}
    />
  )
}
