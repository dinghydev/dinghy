import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_VIRTUAL_DESKTOP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Windows_Virtual_Desktop.svg;',
  _width: 68,
  _height: 68,
}

export function WindowsVirtualDesktop(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_VIRTUAL_DESKTOP} {...props} />
}
