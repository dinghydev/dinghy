import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FACEBOOK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.facebook;fillColor=#6294E4;gradientColor=#1A2665',
  _width: 102.4,
  _height: 102.4,
}

export function Facebook(props: DiagramNodeProps) {
  return <Shape {...FACEBOOK} {...props} />
}
