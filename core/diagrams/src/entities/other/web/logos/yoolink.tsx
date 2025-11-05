import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YOOLINK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yoolink',
  },
  _original_width: 79.2,
  _original_height: 79.2,
}

export function Yoolink(props: NodeProps) {
  return <Shape {...YOOLINK} {...props} _style={extendStyle(YOOLINK, props)} />
}
