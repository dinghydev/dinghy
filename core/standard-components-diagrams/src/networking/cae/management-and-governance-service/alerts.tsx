import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function Alerts(props: DiagramNodeProps) {
  return <Shape {...ALERTS} {...props} />
}
