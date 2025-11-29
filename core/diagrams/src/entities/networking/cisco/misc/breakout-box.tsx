import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BREAKOUT_BOX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.breakout_box;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 43,
  _height: 75,
}

export function BreakoutBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BREAKOUT_BOX)} />
}
