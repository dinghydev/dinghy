import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOT_SECURE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/not_secure.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function NotSecure(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOT_SECURE)} />
}
