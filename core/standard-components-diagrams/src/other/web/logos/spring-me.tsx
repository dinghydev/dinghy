import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPRING_ME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.spring.me;fillColor=#0374B8;strokeColor=none',
  },
  _original_width: 73.2,
  _original_height: 31.6,
}

export function SpringMe(props: DiagramNodeProps) {
  return (
    <Shape {...SPRING_ME} {...props} _style={extendStyle(SPRING_ME, props)} />
  )
}
