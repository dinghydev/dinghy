import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMAZON_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.amazon_2;gradientColor=#231F20',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Amazon2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AMAZON_2)} />
}
