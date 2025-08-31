import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMB = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb;',
  _width: 60,
  _height: 49.199999999999996,
}

export function Smb(props: DiagramNodeProps) {
  return <Shape {...SMB} {...props} _style={extendStyle(SMB, props)} />
}
