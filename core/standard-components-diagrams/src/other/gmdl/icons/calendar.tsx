import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALENDAR = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.calendar;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Calendar(props: DiagramNodeProps) {
  return (
    <Shape {...CALENDAR} {...props} _style={extendStyle(CALENDAR, props)} />
  )
}
