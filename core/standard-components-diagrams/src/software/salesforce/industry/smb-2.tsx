import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMB_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb2;',
  _width: 60,
  _height: 60,
}

export function Smb2(props: DiagramNodeProps) {
  return <Shape {...SMB_2} {...props} />
}
