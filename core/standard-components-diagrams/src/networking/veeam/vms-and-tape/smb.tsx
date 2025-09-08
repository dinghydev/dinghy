import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMB = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.smb;pointerEvents=1;',
  },
  _original_width: 80,
  _original_height: 56.4,
}

export function Smb(props: DiagramNodeProps) {
  return <Shape {...SMB} {...props} _style={extendStyle(SMB, props)} />
}
