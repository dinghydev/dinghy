import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMMERSIVE_TELEPRESENCE_ENDPOINT = {
  _style:
    'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=immersive_telepresence_endpoint;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 114.99999999999999,
  _height: 50,
}

export function ImmersiveTelepresenceEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMMERSIVE_TELEPRESENCE_ENDPOINT}
      {...props}
      _style={extendStyle(IMMERSIVE_TELEPRESENCE_ENDPOINT, props)}
    />
  )
}
