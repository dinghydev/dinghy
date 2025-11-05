import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRANCH = {
  _style: {
    entity:
      'points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[1,1,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.branch;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Branch(props: NodeProps) {
  return <Shape {...BRANCH} {...props} _style={extendStyle(BRANCH, props)} />
}
