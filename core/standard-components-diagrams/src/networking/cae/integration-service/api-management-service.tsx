import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const API_MANAGEMENT_SERVICE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/API_Management.svg;',
  _width: 50,
  _height: 42,
}

export function ApiManagementService(props: DiagramNodeProps) {
  return <Shape {...API_MANAGEMENT_SERVICE} {...props} />
}
