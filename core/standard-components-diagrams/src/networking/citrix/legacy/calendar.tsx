import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALENDAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.calendar;',
  },
  _original_width: 75,
  _original_height: 100,
}

export function Calendar(props: DiagramNodeProps) {
  return (
    <Shape {...CALENDAR} {...props} _style={extendStyle(CALENDAR, props)} />
  )
}
