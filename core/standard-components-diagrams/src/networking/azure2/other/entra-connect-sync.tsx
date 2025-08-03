import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRA_CONNECT_SYNC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Entra_Connect_Sync.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function EntraConnectSync(props: DiagramNodeProps) {
  return <Shape {...ENTRA_CONNECT_SYNC} {...props} />
}
