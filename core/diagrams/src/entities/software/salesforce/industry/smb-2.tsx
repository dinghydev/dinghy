import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMB_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.smb2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Smb2(props: DiagramNodeProps) {
  return <Shape {...SMB_2} {...props} _style={extendStyle(SMB_2, props)} />
}
