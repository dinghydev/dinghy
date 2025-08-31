import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGEMENT_PORTAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Management_Portal.svg;strokeColor=none;',
  _width: 60,
  _height: 48,
}

export function ManagementPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGEMENT_PORTAL}
      {...props}
      _style={extendStyle(MANAGEMENT_PORTAL, props)}
    />
  )
}
