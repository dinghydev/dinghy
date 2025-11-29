import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACK_HCI_PREMIUM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Stack_HCI_Premium.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function StackHciPremium(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACK_HCI_PREMIUM)} />
}
