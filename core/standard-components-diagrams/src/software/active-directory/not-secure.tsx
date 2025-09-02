import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOT_SECURE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/not_secure.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function NotSecure(props: DiagramNodeProps) {
  return (
    <Shape {...NOT_SECURE} {...props} _style={extendStyle(NOT_SECURE, props)} />
  )
}
