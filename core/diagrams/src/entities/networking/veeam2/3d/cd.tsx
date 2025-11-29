import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CD = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.cd;',
  },
  _width: 68,
  _height: 26,
}

export function Cd(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CD)} />
}
