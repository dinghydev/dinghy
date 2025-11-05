import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACKEXCHANGE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.stackexchange',
  },
  _original_width: 63.800000000000004,
  _original_height: 79,
}

export function Stackexchange(props: NodeProps) {
  return (
    <Shape
      {...STACKEXCHANGE}
      {...props}
      _style={extendStyle(STACKEXCHANGE, props)}
    />
  )
}
