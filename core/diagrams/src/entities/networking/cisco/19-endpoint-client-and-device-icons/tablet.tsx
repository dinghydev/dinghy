import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'points=[[0.015,0.14,0],[0.5,0,0],[0.985,0.14,0],[1,0.57,0],[0.99,0.98,0],[0.5,1,0],[0.01,0.98,0],[0,0.57,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.tablet;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function Tablet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLET)} />
}
