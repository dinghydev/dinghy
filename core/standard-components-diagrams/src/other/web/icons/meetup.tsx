import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEETUP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.meetup;fillColor=#F83263;gradientColor=#D40D19',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Meetup(props: DiagramNodeProps) {
  return <Shape {...MEETUP} {...props} _style={extendStyle(MEETUP, props)} />
}
