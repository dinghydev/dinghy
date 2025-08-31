import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER_WITH_VOICE = {
  _style:
    'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=router_with_voice;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 60,
  _height: 60,
}

export function RouterWithVoice(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTER_WITH_VOICE}
      {...props}
      _style={extendStyle(ROUTER_WITH_VOICE, props)}
    />
  )
}
