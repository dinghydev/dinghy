import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURE_ENDPOINT_PC = {
  _style: {
    entity:
      'points=[[0.02,0.015,0],[0.5,0,0],[0.98,0.015,0],[1,0.38,0],[0.895,0.98,0],[0.5,1,0],[0.105,0.98,0],[0,0.38,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.secure_endpoint_pc;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function SecureEndpointPc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SECURE_ENDPOINT_PC)} />
}
