import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LYNC_STORAGE_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_storage_service;',
  },
  _original_width: 66,
  _original_height: 59,
}

export function LyncStorageService(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_STORAGE_SERVICE}
      {...props}
      _style={extendStyle(LYNC_STORAGE_SERVICE, props)}
    />
  )
}
