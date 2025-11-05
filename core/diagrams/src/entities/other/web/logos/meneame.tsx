import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MENEAME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.meneame',
  },
  _original_width: 76,
  _original_height: 67.60000000000001,
}

export function Meneame(props: NodeProps) {
  return <Shape {...MENEAME} {...props} _style={extendStyle(MENEAME, props)} />
}
