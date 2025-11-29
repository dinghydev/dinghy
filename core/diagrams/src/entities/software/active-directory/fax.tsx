import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAX = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/fax.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 37.5,
}

export function Fax(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FAX)} />
}
