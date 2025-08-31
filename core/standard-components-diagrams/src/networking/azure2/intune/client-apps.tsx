import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Client_Apps.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ClientApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_APPS}
      {...props}
      _style={extendStyle(CLIENT_APPS, props)}
    />
  )
}
