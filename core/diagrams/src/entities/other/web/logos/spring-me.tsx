import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRING_ME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.spring.me;fillColor=#0374B8;strokeColor=none',
  },
  _width: 73.2,
  _height: 31.6,
}

export function SpringMe(props: NodeProps) {
  return (
    <Shape {...SPRING_ME} {...props} _style={extendStyle(SPRING_ME, props)} />
  )
}
