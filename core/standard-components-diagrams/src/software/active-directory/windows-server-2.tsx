import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_SERVER_2 = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_server_2.svg;',
  _width: 40,
  _height: 50,
}

export function WindowsServer2(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_SERVER_2} {...props} />
}
