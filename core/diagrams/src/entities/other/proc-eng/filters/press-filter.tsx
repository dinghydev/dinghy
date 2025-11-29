import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRESS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.press_filter;',
  },
  _width: 100,
  _height: 50,
}

export function PressFilter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRESS_FILTER)} />
}
