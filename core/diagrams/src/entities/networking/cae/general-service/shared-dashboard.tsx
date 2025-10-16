import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARED_DASHBOARD = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Shared_Dashboard.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 41,
}

export function SharedDashboard(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_DASHBOARD}
      {...props}
      _style={extendStyle(SHARED_DASHBOARD, props)}
    />
  )
}
