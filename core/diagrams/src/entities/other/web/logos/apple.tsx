import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apple;fillColor=#1B1C1C;strokeColor=none',
  },
  _original_width: 62.400000000000006,
  _original_height: 76.2,
}

export function Apple(props: NodeProps) {
  return <Shape {...APPLE} {...props} _style={extendStyle(APPLE, props)} />
}
