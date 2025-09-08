import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPDT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.twoWaySwitch;aspect=fixed;elSwitchState=2;',
  },
  _original_width: 75,
  _original_height: 26,
}

export function Spdt(props: DiagramNodeProps) {
  return <Shape {...SPDT} {...props} _style={extendStyle(SPDT, props)} />
}
