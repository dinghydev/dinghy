import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9780A_2530_8_POE_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9780a_2530_8_poeplus_rear;',
  },
  _width: 142,
  _height: 15,
}

export function J9780a25308PoeRear(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, J9780A_2530_8_POE_REAR)} />
  )
}
