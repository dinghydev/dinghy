import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_ROUTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Router.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function VirtualRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_ROUTER}
      {...props}
      _style={extendStyle(VIRTUAL_ROUTER, props)}
    />
  )
}
