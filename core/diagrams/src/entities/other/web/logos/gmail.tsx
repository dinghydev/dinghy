import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GMAIL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gmail',
  },
  _original_width: 64.8,
  _original_height: 46.800000000000004,
}

export function Gmail(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GMAIL)} />
}
