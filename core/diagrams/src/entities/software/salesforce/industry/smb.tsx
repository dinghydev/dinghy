import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb;',
  },
  _original_width: 60,
  _original_height: 49.199999999999996,
}

export function Smb(props: DiagramNodeProps) {
  return <Shape {...SMB} {...props} _style={extendStyle(SMB, props)} />
}
