import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_EVENT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.timeEvent;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 35,
  _height: 40,
}

export function TimeEvent(props: NodeProps) {
  return (
    <Shape {...TIME_EVENT} {...props} _style={extendStyle(TIME_EVENT, props)} />
  )
}
