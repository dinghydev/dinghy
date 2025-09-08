import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANGEOVER_CONTACT_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.changeoverContactSwitch2;elSwitchState=2;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function ChangeoverContact2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGEOVER_CONTACT_2}
      {...props}
      _style={extendStyle(CHANGEOVER_CONTACT_2, props)}
    />
  )
}
