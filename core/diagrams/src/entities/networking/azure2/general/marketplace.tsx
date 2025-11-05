import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MARKETPLACE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Marketplace.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 64,
}

export function Marketplace(props: NodeProps) {
  return (
    <Shape
      {...MARKETPLACE}
      {...props}
      _style={extendStyle(MARKETPLACE, props)}
    />
  )
}
