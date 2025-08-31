import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGE_SUBSCRIPTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.edge_subscription;',
  },
  _width: 57,
  _height: 59,
}

export function EdgeSubscription(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_SUBSCRIPTION}
      {...props}
      _style={extendStyle(EDGE_SUBSCRIPTION, props)}
    />
  )
}
