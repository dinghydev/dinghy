import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RETAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.retail;',
  },
  _original_width: 45,
  _original_height: 60,
}

export function Retail(props: DiagramNodeProps) {
  return <Shape {...RETAIL} {...props} _style={extendStyle(RETAIL, props)} />
}
