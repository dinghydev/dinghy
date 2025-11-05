import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASR_9000 = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=asr_9000;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Asr9000(props: NodeProps) {
  return (
    <Shape {...ASR_9000} {...props} _style={extendStyle(ASR_9000, props)} />
  )
}
