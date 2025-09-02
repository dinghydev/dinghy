import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEETUP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.meetup;fillColor=#413E3E;strokeColor=none',
  },
  _original_width: 74.8,
  _original_height: 30,
}

export function Meetup(props: DiagramNodeProps) {
  return <Shape {...MEETUP} {...props} _style={extendStyle(MEETUP, props)} />
}
