import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOCOL_STACK = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.protocol_stack',
  _width: 50,
  _height: 34,
}

export function ProtocolStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROTOCOL_STACK}
      {...props}
      _style={extendStyle(PROTOCOL_STACK, props)}
    />
  )
}
