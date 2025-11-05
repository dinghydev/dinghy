import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FWISP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fwisp;fillColor=#66676A;strokeColor=none',
  },
  _original_width: 65.4,
  _original_height: 66,
}

export function Fwisp(props: NodeProps) {
  return <Shape {...FWISP} {...props} _style={extendStyle(FWISP, props)} />
}
