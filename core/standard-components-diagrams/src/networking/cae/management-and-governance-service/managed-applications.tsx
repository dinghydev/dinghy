import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_APPLICATIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Applications.svg;',
  _width: 47,
  _height: 50,
}

export function ManagedApplications(props: DiagramNodeProps) {
  return <Shape {...MANAGED_APPLICATIONS} {...props} />
}
