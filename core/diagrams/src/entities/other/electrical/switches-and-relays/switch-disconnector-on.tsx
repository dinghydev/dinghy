import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH_DISCONNECTOR_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.switchDisconnector;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 20,
}

export function SwitchDisconnectorOn(props: NodeProps) {
  return (
    <Shape
      {...SWITCH_DISCONNECTOR_ON}
      {...props}
      _style={extendStyle(SWITCH_DISCONNECTOR_ON, props)}
    />
  )
}
