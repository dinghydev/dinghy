import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALERTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Alerts.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 56.00000000000001,
}

export function Alerts(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALERTS)} />
}
