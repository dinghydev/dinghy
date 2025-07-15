import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRIENDFEED = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.friendfeed;fillColor=#7BDCEF;gradientColor=#21379E',
  _width: 102.4,
  _height: 102.4,
}

export function Friendfeed(props: DiagramNodeProps) {
  return <Shape {...FRIENDFEED} {...props} />
}
