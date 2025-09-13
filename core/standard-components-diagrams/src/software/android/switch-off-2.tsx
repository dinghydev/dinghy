import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_OFF_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_off;fillColor=#E6E6E6;sketch=0;',
  },
  _width: 80,
  _height: 20,
}

export function SwitchOff2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_OFF_2}
      {...props}
      _style={extendStyle(SWITCH_OFF_2, props)}
    />
  )
}
