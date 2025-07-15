import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRING_ME = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.spring.me;fillColor=#3CBEF2;gradientColor=#2B8AAF',
  _width: 102.4,
  _height: 102.4,
}

export function SpringMe(props: DiagramNodeProps) {
  return <Shape {...SPRING_ME} {...props} />
}
