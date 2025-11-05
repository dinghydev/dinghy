import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEGNALO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.segnalo',
  },
  _original_width: 80.60000000000001,
  _original_height: 77.80000000000001,
}

export function Segnalo(props: NodeProps) {
  return <Shape {...SEGNALO} {...props} _style={extendStyle(SEGNALO, props)} />
}
