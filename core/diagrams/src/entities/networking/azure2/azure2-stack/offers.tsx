import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Offers.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function Offers(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFFERS)} />
}
