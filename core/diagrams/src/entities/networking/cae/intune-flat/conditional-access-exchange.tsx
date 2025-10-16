import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONDITIONAL_ACCESS_EXCHANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.conditional_access_exchange',
  },
  _original_width: 49,
  _original_height: 50,
}

export function ConditionalAccessExchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONDITIONAL_ACCESS_EXCHANGE}
      {...props}
      _style={extendStyle(CONDITIONAL_ACCESS_EXCHANGE, props)}
    />
  )
}
