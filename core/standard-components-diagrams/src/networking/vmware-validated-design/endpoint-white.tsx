import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENDPOINT_WHITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.endpoint;fillColor=#ffffff;',
  },
  _original_width: 50,
  _original_height: 46.5,
}

export function EndpointWhite(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENDPOINT_WHITE}
      {...props}
      _style={extendStyle(ENDPOINT_WHITE, props)}
    />
  )
}
