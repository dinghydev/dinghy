import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LYNC_STORAGE_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.lync_storage_service;',
  _width: 65,
  _height: 58,
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
