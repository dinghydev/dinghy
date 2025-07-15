import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAUNCH_PORTAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Launch_Portal.svg;',
  _width: 68,
  _height: 67,
}

export function LaunchPortal(props: DiagramNodeProps) {
  return <Shape {...LAUNCH_PORTAL} {...props} />
}
