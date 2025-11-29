import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MARKETPLACE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Store_Marketplace.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function Marketplace(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MARKETPLACE)} />
}
