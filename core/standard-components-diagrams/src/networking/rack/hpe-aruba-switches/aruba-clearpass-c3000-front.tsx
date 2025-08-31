import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_CLEARPASS_C3000_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.security.aruba_clearpass_c3000_front;',
  _width: 142,
  _height: 15,
}

export function ArubaClearpassC3000Front(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_CLEARPASS_C3000_FRONT}
      {...props}
      _style={extendStyle(ARUBA_CLEARPASS_C3000_FRONT, props)}
    />
  )
}
