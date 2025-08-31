import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRIENDFEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.friendfeed;fillColor=#4172BB',
  },
  _width: 73.8,
  _height: 71,
}

export function Friendfeed(props: DiagramNodeProps) {
  return (
    <Shape {...FRIENDFEED} {...props} _style={extendStyle(FRIENDFEED, props)} />
  )
}
