import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANGEOVER_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.changeoverContactSwitch2;elSwitchState=1;',
  },
  _width: 75,
  _height: 20,
}

export function ChangeoverContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGEOVER_CONTACT}
      {...props}
      _style={extendStyle(CHANGEOVER_CONTACT, props)}
    />
  )
}
