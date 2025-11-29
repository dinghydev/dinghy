import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/security.svg;strokeColor=none;',
  },
  _width: 31.5,
  _height: 50,
}

export function Security(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SECURITY)} />
}
