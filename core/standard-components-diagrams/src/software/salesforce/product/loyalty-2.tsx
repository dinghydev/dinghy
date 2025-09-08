import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOYALTY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.loyalty2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Loyalty2(props: DiagramNodeProps) {
  return (
    <Shape {...LOYALTY_2} {...props} _style={extendStyle(LOYALTY_2, props)} />
  )
}
