import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMB = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb;',
  _width: 60,
  _height: 49.199999999999996,
}

export function Smb(props: DiagramNodeProps) {
  return <Shape {...SMB} {...props} />
}
