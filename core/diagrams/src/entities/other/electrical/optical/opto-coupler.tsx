import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTO_COUPLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-coupler;',
  },
  _width: 99,
  _height: 60,
}

export function OptoCoupler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPTO_COUPLER)} />
}
