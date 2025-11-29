import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEETUP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.meetup;fillColor=#413E3E;strokeColor=none',
  },
  _width: 74.8,
  _height: 30,
}

export function Meetup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MEETUP)} />
}
