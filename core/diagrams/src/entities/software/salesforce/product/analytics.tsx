import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANALYTICS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.analytics;',
  },
  _original_width: 60,
  _original_height: 58.8,
}

export function Analytics(props: NodeProps) {
  return (
    <Shape {...ANALYTICS} {...props} _style={extendStyle(ANALYTICS, props)} />
  )
}
