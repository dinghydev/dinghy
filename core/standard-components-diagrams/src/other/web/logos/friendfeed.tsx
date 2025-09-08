import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FRIENDFEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.friendfeed;fillColor=#4172BB',
  },
  _original_width: 73.8,
  _original_height: 71,
}

export function Friendfeed(props: DiagramNodeProps) {
  return (
    <Shape {...FRIENDFEED} {...props} _style={extendStyle(FRIENDFEED, props)} />
  )
}
