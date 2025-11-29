import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_ROUTER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_router.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function WindowsRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WINDOWS_ROUTER)} />
}
