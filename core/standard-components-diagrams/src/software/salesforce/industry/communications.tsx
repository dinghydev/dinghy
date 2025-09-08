import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMUNICATIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.communications;',
  },
  _original_width: 47.400000000000006,
  _original_height: 60,
}

export function Communications(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS}
      {...props}
      _style={extendStyle(COMMUNICATIONS, props)}
    />
  )
}
