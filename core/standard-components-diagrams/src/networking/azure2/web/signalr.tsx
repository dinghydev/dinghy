import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNALR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/SignalR.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Signalr(props: DiagramNodeProps) {
  return <Shape {...SIGNALR} {...props} _style={extendStyle(SIGNALR, props)} />
}
