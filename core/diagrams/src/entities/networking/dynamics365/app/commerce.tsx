import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMERCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Commerce.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 59.519999999999996,
}

export function Commerce(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMERCE)} />
}
