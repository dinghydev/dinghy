import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_SWITCH_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 20,
}

export function SingleSwitchOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SINGLE_SWITCH_ON)} />
}
