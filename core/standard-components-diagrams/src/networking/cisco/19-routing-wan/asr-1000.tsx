import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASR_1000 = {
  _style:
    'points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.25,0,0],[0.75,0,0],[0.25,1,0],[0.75,1,0],[0.125,0.25,0],[0.875,0.25,0],[0.875,0.75,0],[0.125,0.75,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=asr_1000;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 56.99999999999999,
  _height: 50,
}

export function Asr1000(props: DiagramNodeProps) {
  return (
    <Shape {...ASR_1000} {...props} _style={extendStyle(ASR_1000, props)} />
  )
}
