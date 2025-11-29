import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMB = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.smb;pointerEvents=1;',
  },
  _width: 80,
  _height: 56.4,
}

export function Smb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SMB)} />
}
