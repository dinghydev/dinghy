import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_ROUTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Router.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
