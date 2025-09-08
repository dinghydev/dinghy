import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_SWITCH_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.singleSwitch;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function SingleSwitchOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SWITCH_ON}
      {...props}
      _style={extendStyle(SINGLE_SWITCH_ON, props)}
    />
  )
}
