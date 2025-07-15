import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMB = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.smb;pointerEvents=1;',
  _width: 80,
  _height: 56.4,
}

export function Smb(props: DiagramNodeProps) {
  return <Shape {...SMB} {...props} />
}
