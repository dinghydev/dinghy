import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTEGRATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.integration;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Integration(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION}
      {...props}
      _style={extendStyle(INTEGRATION, props)}
    />
  )
}
