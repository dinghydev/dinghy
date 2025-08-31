import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DASHBOARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dashboard.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function Dashboard(props: DiagramNodeProps) {
  return (
    <Shape {...DASHBOARD} {...props} _style={extendStyle(DASHBOARD, props)} />
  )
}
