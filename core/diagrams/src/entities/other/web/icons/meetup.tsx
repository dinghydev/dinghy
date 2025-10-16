import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEETUP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.meetup;fillColor=#F83263;gradientColor=#D40D19',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Meetup(props: DiagramNodeProps) {
  return <Shape {...MEETUP} {...props} _style={extendStyle(MEETUP, props)} />
}
