import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMB_BUSINESS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.smb_business;',
  },
  _width: 38,
  _height: 27,
}

export function SmbBusiness(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SMB_BUSINESS)} />
}
