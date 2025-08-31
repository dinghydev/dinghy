import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_DELAY_MAKE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.timeDelaySwitch2;elSwitchState=off;',
  },
  _width: 75,
  _height: 36,
}

export function TimeDelayMake2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_DELAY_MAKE_2}
      {...props}
      _style={extendStyle(TIME_DELAY_MAKE_2, props)}
    />
  )
}
