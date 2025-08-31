import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PASSING_MAKE_CONTACT_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.passingMakeContact2;elSwitchState=off;',
  },
  _width: 75,
  _height: 23,
}

export function PassingMakeContactOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...PASSING_MAKE_CONTACT_OFF}
      {...props}
      _style={extendStyle(PASSING_MAKE_CONTACT_OFF, props)}
    />
  )
}
