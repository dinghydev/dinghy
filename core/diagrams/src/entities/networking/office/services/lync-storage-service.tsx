import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LYNC_STORAGE_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.lync_storage_service;',
  },
  _original_width: 65,
  _original_height: 58,
}

export function LyncStorageService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LYNC_STORAGE_SERVICE)} />
}
