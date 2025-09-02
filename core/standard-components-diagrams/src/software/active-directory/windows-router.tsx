import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS_ROUTER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_router.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function WindowsRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_ROUTER}
      {...props}
      _style={extendStyle(WINDOWS_ROUTER, props)}
    />
  )
}
