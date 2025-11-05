import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUFACTURING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Manufacturing(props: NodeProps) {
  return (
    <Shape
      {...MANUFACTURING}
      {...props}
      _style={extendStyle(MANUFACTURING, props)}
    />
  )
}
