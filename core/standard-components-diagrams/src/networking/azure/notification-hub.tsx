import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION_HUB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_hub;pointerEvents=1;',
  },
  _width: 60,
  _height: 60,
}

export function NotificationHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION_HUB}
      {...props}
      _style={extendStyle(NOTIFICATION_HUB, props)}
    />
  )
}
