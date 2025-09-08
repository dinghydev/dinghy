import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWITTER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.twitter;fillColor=#49EAF7;gradientColor=#137BD0',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Twitter(props: DiagramNodeProps) {
  return <Shape {...TWITTER} {...props} _style={extendStyle(TWITTER, props)} />
}
