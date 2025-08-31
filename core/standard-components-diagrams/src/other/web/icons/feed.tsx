import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEED = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.feed;fillColor=#FFAC75;gradientColor=#FF6600',
  _width: 102.4,
  _height: 102.4,
}

export function Feed(props: DiagramNodeProps) {
  return <Shape {...FEED} {...props} _style={extendStyle(FEED, props)} />
}
