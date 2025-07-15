import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIENT_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Client_Apps.svg;',
  _width: 68,
  _height: 68,
}

export function ClientApps(props: DiagramNodeProps) {
  return <Shape {...CLIENT_APPS} {...props} />
}
