import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pushbutton;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function PushbuttonOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_OFF}
      {...props}
      _style={extendStyle(PUSHBUTTON_OFF, props)}
    />
  )
}
