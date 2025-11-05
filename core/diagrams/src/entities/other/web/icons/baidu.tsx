import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAIDU = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.baidu;fillColor=#738FE8;gradientColor=#1F2470',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Baidu(props: NodeProps) {
  return <Shape {...BAIDU} {...props} _style={extendStyle(BAIDU, props)} />
}
