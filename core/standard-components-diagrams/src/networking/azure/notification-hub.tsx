import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTIFICATION_HUB = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_hub;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function NotificationHub(props: DiagramNodeProps) {
  return <Shape {...NOTIFICATION_HUB} {...props} />
}
