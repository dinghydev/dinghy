import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_MANAGEMENT_PRIVATE_LINK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Resource_Management_Private_Link.svg;strokeColor=none;',
  _width: 68,
  _height: 66,
}

export function ResourceManagementPrivateLink(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_MANAGEMENT_PRIVATE_LINK} {...props} />
}
