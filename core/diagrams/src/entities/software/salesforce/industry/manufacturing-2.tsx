import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUFACTURING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Manufacturing2(props: NodeProps) {
  return (
    <Shape
      {...MANUFACTURING_2}
      {...props}
      _style={extendStyle(MANUFACTURING_2, props)}
    />
  )
}
