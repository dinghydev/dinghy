import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_DESKTOP = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Desktop.svg;strokeColor=none;',
  _width: 50,
  _height: 36,
}

export function ManagedDesktop(props: DiagramNodeProps) {
  return <Shape {...MANAGED_DESKTOP} {...props} />
}
