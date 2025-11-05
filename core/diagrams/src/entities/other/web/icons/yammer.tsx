import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YAMMER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yammer;fillColor=#00AFE0;gradientColor=#005F7A',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Yammer(props: NodeProps) {
  return <Shape {...YAMMER} {...props} _style={extendStyle(YAMMER, props)} />
}
