import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRESS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.press_filter;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function PressFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRESS_FILTER}
      {...props}
      _style={extendStyle(PRESS_FILTER, props)}
    />
  )
}
