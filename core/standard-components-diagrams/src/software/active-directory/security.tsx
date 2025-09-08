import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURITY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/security.svg;strokeColor=none;',
  },
  _original_width: 31.5,
  _original_height: 50,
}

export function Security(props: DiagramNodeProps) {
  return (
    <Shape {...SECURITY} {...props} _style={extendStyle(SECURITY, props)} />
  )
}
