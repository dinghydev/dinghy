import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PASSING_MAKE_CONTACT_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.passingMakeContact2;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 23,
}

export function PassingMakeContactOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PASSING_MAKE_CONTACT_ON}
      {...props}
      _style={extendStyle(PASSING_MAKE_CONTACT_ON, props)}
    />
  )
}
