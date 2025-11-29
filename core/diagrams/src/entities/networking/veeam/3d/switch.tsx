import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.switch;',
  },
  _width: 110,
  _height: 58,
}

export function Switch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWITCH)} />
}
