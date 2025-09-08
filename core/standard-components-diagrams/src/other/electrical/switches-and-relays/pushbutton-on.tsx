import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pushbutton;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function PushbuttonOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_ON}
      {...props}
      _style={extendStyle(PUSHBUTTON_ON, props)}
    />
  )
}
