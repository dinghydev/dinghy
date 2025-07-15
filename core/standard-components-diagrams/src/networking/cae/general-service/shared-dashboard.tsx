import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_DASHBOARD = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Shared_Dashboard.svg;',
  _width: 50,
  _height: 41,
}

export function SharedDashboard(props: DiagramNodeProps) {
  return <Shape {...SHARED_DASHBOARD} {...props} />
}
