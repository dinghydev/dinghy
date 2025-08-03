import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTERPRISE_APPLICATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Enterprise_Applications.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function EnterpriseApplications(props: DiagramNodeProps) {
  return <Shape {...ENTERPRISE_APPLICATIONS} {...props} />
}
