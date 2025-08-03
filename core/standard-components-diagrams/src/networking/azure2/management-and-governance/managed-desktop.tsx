import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_DESKTOP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Managed_Desktop.svg;strokeColor=none;',
  _width: 68,
  _height: 63.2,
}

export function ManagedDesktop(props: DiagramNodeProps) {
  return <Shape {...MANAGED_DESKTOP} {...props} />
}
