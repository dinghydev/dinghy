import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_LINK_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link_Hub.svg;strokeColor=none;',
  },
  _original_width: 58.8,
  _original_height: 68,
}

export function PrivateLinkServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_LINK_SERVICES}
      {...props}
      _style={extendStyle(PRIVATE_LINK_SERVICES, props)}
    />
  )
}
