import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATE_LINK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 66,
}

export function PrivateLink(props: NodeProps) {
  return (
    <Shape
      {...PRIVATE_LINK}
      {...props}
      _style={extendStyle(PRIVATE_LINK, props)}
    />
  )
}
