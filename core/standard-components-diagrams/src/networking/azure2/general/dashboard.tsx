import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DASHBOARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dashboard.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48,
}

export function Dashboard(props: DiagramNodeProps) {
  return (
    <Shape {...DASHBOARD} {...props} _style={extendStyle(DASHBOARD, props)} />
  )
}
