import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/secure.svg;strokeColor=none;',
  },
  _original_width: 32,
  _original_height: 50,
}

export function Secure(props: DiagramNodeProps) {
  return <Shape {...SECURE} {...props} _style={extendStyle(SECURE, props)} />
}
