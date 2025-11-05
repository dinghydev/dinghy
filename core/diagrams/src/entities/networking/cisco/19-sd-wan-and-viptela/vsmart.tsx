import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VSMART = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=vsmart;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Vsmart(props: NodeProps) {
  return <Shape {...VSMART} {...props} _style={extendStyle(VSMART, props)} />
}
