import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MR_PORTAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/MRPortal.svg;strokeColor=none;',
  _width: 68,
  _height: 62.32,
}

export function MrPortal(props: DiagramNodeProps) {
  return <Shape {...MR_PORTAL} {...props} />
}
