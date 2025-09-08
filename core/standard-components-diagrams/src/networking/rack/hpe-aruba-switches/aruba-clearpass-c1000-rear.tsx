import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARUBA_CLEARPASS_C1000_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.security.aruba_clearpass_c1000_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function ArubaClearpassC1000Rear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_CLEARPASS_C1000_REAR}
      {...props}
      _style={extendStyle(ARUBA_CLEARPASS_C1000_REAR, props)}
    />
  )
}
