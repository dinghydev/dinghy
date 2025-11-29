import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_DELAY_MAKE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch2;elSwitchState=off;',
  },
  _width: 75,
  _height: 36,
}

export function TimeDelayMake2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIME_DELAY_MAKE_2)} />
}
