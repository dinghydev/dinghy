import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SSC = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ssc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 67,
}

export function Ssc(props: NodeProps) {
  return <Shape {...SSC} {...props} _style={extendStyle(SSC, props)} />
}
