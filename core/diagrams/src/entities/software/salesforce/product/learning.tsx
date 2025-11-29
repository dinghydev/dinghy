import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LEARNING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.learning;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Learning(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LEARNING)} />
}
