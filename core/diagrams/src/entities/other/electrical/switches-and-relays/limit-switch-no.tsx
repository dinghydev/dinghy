import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIMIT_SWITCH_NO = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.limitSwitch;elSwitchState=off;',
  },
  _width: 75,
  _height: 25,
}

export function LimitSwitchNo(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIMIT_SWITCH_NO}
      {...props}
      _style={extendStyle(LIMIT_SWITCH_NO, props)}
    />
  )
}
