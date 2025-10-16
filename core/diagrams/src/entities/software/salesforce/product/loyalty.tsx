import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOYALTY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.loyalty;',
  },
  _original_width: 60,
  _original_height: 40.800000000000004,
}

export function Loyalty(props: DiagramNodeProps) {
  return <Shape {...LOYALTY} {...props} _style={extendStyle(LOYALTY, props)} />
}
