import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSONAR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.netsonar;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 66,
  _height: 45,
}

export function Netsonar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETSONAR)} />
}
