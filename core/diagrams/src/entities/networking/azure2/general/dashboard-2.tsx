import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DASHBOARD_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Dashboard2.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function Dashboard2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DASHBOARD_2)} />
}
