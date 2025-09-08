import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_VIRTUAL_DESKTOP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Windows_Virtual_Desktop.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WindowsVirtualDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_VIRTUAL_DESKTOP}
      {...props}
      _style={extendStyle(WINDOWS_VIRTUAL_DESKTOP, props)}
    />
  )
}
