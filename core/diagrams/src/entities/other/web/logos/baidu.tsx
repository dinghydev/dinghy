import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAIDU = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.baidu;fillColor=#3F4D9E',
  },
  _original_width: 71,
  _original_height: 77,
}

export function Baidu(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BAIDU)} />
}
