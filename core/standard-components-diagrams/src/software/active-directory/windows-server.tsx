import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_server.svg;strokeColor=none;',
  },
  _original_width: 41,
  _original_height: 50,
}

export function WindowsServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_SERVER}
      {...props}
      _style={extendStyle(WINDOWS_SERVER, props)}
    />
  )
}
