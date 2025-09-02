import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
