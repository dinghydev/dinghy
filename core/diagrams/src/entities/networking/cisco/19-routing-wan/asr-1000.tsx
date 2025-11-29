import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASR_1000 = {
  _style: {
    entity:
      'points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.25,0,0],[0.75,0,0],[0.25,1,0],[0.75,1,0],[0.125,0.25,0],[0.875,0.25,0],[0.875,0.75,0],[0.125,0.75,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=asr_1000;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 56.99999999999999,
  _original_height: 50,
}

export function Asr1000(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ASR_1000)} />
}
