import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAUNCH_PORTAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Launch_Portal.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 67,
}

export function LaunchPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAUNCH_PORTAL}
      {...props}
      _style={extendStyle(LAUNCH_PORTAL, props)}
    />
  )
}
