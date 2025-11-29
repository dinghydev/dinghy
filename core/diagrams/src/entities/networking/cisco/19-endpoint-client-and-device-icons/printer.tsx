import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINTER = {
  _style: {
    entity:
      'points=[[0.22,0.185,0],[0.5,0,0],[0.78,0.185,0],[0.975,0.49,0],[1,0.73,0],[0.975,0.97,0],[0.5,1,0],[0.025,0.97,0],[0,0.73,0],[0.025,0.49,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.printer;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Printer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRINTER)} />
}
