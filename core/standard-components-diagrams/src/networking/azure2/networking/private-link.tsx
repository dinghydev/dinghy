import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_LINK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 66,
}

export function PrivateLink(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_LINK}
      {...props}
      _style={extendStyle(PRIVATE_LINK, props)}
    />
  )
}
