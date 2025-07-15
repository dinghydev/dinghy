import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIGNALR = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SignalR.svg;',
  _width: 50,
  _height: 50,
}

export function Signalr(props: DiagramNodeProps) {
  return <Shape {...SIGNALR} {...props} />
}
