import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMAZON = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.amazon',
  },
  _original_width: 62.800000000000004,
  _original_height: 68.2,
}

export function Amazon(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AMAZON)} />
}
