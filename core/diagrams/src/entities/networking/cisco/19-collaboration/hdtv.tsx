import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HDTV = {
  _style: {
    entity:
      'points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[1,0.4,0],[1,0.8,0],[0.815,1,0],[0.5,1,0],[0.185,1,0],[0,0.8,0],[0,0.4,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.hdtv;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function Hdtv(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HDTV)} />
}
