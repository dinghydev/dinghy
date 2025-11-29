import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCESS_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.access_control;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AccessControl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACCESS_CONTROL)} />
}
