import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORT_RULE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.transport_rule;',
  _width: 56,
  _height: 57,
}

export function TransportRule(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSPORT_RULE}
      {...props}
      _style={extendStyle(TRANSPORT_RULE, props)}
    />
  )
}
