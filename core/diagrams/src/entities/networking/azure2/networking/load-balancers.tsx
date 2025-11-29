import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_BALANCERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Load_Balancers.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function LoadBalancers(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOAD_BALANCERS)} />
}
