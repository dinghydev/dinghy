import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_ME = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.spring.me;fillColor=#0374B8;strokeColor=none',
  _width: 73.2,
  _height: 31.6,
}

export function SpringMe(props: DiagramNodeProps) {
  return (
    <Shape {...SPRING_ME} {...props} _style={extendStyle(SPRING_ME, props)} />
  )
}
