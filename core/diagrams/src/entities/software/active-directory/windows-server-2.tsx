import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_SERVER_2 = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_server_2.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function WindowsServer2(props: NodeProps) {
  return (
    <Shape
      {...WINDOWS_SERVER_2}
      {...props}
      _style={extendStyle(WINDOWS_SERVER_2, props)}
    />
  )
}
