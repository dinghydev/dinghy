import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DASHBOARD_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dashboard2.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function Dashboard2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DASHBOARD_2}
      {...props}
      _style={extendStyle(DASHBOARD_2, props)}
    />
  )
}
