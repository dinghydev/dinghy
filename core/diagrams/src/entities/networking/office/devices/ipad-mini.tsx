import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD_MINI = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ipad_mini;',
  },
  _width: 33,
  _height: 47,
}

export function IpadMini(props: NodeProps) {
  return (
    <Shape {...IPAD_MINI} {...props} _style={extendStyle(IPAD_MINI, props)} />
  )
}
