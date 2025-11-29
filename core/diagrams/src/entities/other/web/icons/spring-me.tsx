import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRING_ME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.spring.me;fillColor=#3CBEF2;gradientColor=#2B8AAF',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function SpringMe(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRING_ME)} />
}
