import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTIFICATION_HUB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_hub;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NotificationHub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOTIFICATION_HUB)} />
}
