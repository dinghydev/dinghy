import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANALYTICS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.analytics2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Analytics2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANALYTICS_2}
      {...props}
      _style={extendStyle(ANALYTICS_2, props)}
    />
  )
}
