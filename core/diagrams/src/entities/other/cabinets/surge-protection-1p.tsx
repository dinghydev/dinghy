import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTION_1P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.surge_protection_1p;',
  },
  _width: 9,
  _height: 50,
}

export function SurgeProtection1p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SURGE_PROTECTION_1P)} />
}
