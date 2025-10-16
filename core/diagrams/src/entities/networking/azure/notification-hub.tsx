import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTIFICATION_HUB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_hub;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
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
