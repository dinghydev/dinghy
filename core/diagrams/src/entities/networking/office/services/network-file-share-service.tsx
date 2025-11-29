import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_FILE_SHARE_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.network_file_share_service;',
  },
  _original_width: 55,
  _original_height: 53,
}

export function NetworkFileShareService(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NETWORK_FILE_SHARE_SERVICE)} />
  )
}
