import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGEOVER_CONTACT_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.changeoverContactSwitch2;elSwitchState=2;',
  },
  _width: 75,
  _height: 20,
}

export function ChangeoverContact2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANGEOVER_CONTACT_2)} />
}
