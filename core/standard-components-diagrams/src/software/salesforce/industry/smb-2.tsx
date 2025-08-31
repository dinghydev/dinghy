import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMB_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb2;',
  _width: 60,
  _height: 60,
}

export function Smb2(props: DiagramNodeProps) {
  return <Shape {...SMB_2} {...props} _style={extendStyle(SMB_2, props)} />
}
