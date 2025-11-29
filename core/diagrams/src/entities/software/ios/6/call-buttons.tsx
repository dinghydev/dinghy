import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_BUTTONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCallButtons;',
  },
  _width: 174,
  _height: 229.99999999999997,
}

export function CallButtons(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALL_BUTTONS)} />
}
