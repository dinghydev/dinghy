import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.feed;fillColor=#FFAC75;gradientColor=#FF6600',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Feed(props: DiagramNodeProps) {
  return <Shape {...FEED} {...props} _style={extendStyle(FEED, props)} />
}
