import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEED = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.feed;fillColor=#000000',
  _width: 60.400000000000006,
  _height: 59.2,
}

export function Feed(props: DiagramNodeProps) {
  return <Shape {...FEED} {...props} _style={extendStyle(FEED, props)} />
}
