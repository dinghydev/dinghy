import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTRA_CONNECT_SYNC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Entra_Connect_Sync.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function EntraConnectSync(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_CONNECT_SYNC}
      {...props}
      _style={extendStyle(ENTRA_CONNECT_SYNC, props)}
    />
  )
}
