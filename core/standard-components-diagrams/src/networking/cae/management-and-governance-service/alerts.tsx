import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALERTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Alerts(props: DiagramNodeProps) {
  return <Shape {...ALERTS} {...props} _style={extendStyle(ALERTS, props)} />
}
