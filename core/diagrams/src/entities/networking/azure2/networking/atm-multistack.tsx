import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATM_MULTISTACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/ATM_Multistack.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AtmMultistack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ATM_MULTISTACK)} />
}
