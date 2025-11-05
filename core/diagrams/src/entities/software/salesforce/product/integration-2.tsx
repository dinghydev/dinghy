import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.integration2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Integration2(props: NodeProps) {
  return (
    <Shape
      {...INTEGRATION_2}
      {...props}
      _style={extendStyle(INTEGRATION_2, props)}
    />
  )
}
