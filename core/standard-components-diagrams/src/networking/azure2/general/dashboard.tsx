import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DASHBOARD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dashboard.svg;',
  _width: 68,
  _height: 48,
}

export function Dashboard(props: DiagramNodeProps) {
  return <Shape {...DASHBOARD} {...props} />
}
