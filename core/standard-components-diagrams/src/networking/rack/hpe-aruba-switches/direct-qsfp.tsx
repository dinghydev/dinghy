import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECT_QSFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.security.direct_qsfp;',
  },
  _width: 11,
  _height: 5.7,
}

export function DirectQsfp(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_QSFP}
      {...props}
      _style={extendStyle(DIRECT_QSFP, props)}
    />
  )
}
