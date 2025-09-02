import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_ME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.spring.me;fillColor=#3CBEF2;gradientColor=#2B8AAF',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function SpringMe(props: DiagramNodeProps) {
  return (
    <Shape {...SPRING_ME} {...props} _style={extendStyle(SPRING_ME, props)} />
  )
}
