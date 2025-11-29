import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALENDAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.calendar;',
  },
  _width: 75,
  _height: 100,
}

export function Calendar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALENDAR)} />
}
