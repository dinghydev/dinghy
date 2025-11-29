import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.pushbutton;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 20,
}

export function PushbuttonOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PUSHBUTTON_ON)} />
}
