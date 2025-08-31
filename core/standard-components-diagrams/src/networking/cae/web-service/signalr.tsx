import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNALR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SignalR.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Signalr(props: DiagramNodeProps) {
  return <Shape {...SIGNALR} {...props} _style={extendStyle(SIGNALR, props)} />
}
