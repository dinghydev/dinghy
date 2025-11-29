import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'points=[[0.03,0.03,0],[0.5,0,0],[0.97,0.03,0],[1,0.4,0],[0.97,0.745,0],[0.5,1,0],[0.03,0.745,0],[0,0.4,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.workstation;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function Workstation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORKSTATION)} />
}
