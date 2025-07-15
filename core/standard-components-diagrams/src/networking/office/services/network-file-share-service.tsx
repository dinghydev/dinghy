import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_FILE_SHARE_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.network_file_share_service;',
  _width: 55,
  _height: 53,
}

export function NetworkFileShareService(props: DiagramNodeProps) {
  return <Shape {...NETWORK_FILE_SHARE_SERVICE} {...props} />
}
