import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/router.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 38,
}

export function Router(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUTER)} />
}
