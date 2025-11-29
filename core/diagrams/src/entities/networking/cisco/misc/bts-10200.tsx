import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BTS_10200 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.bts_10200;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 50,
  _height: 75,
}

export function Bts10200(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BTS_10200)} />
}
