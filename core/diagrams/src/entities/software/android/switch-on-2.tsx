import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH_ON_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.switch_on;fillColor=#E6E6E6;sketch=0;',
  },
  _width: 80,
  _height: 20,
}

export function SwitchOn2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWITCH_ON_2)} />
}
