import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENDPOINT_WHITE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.endpoint;fillColor=#ffffff;',
  _width: 50,
  _height: 46.5,
}

export function EndpointWhite(props: DiagramNodeProps) {
  return <Shape {...ENDPOINT_WHITE} {...props} />
}
