import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGEMENT_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Management_Groups.svg;',
  _width: 66,
  _height: 64,
}

export function ManagementGroups(props: DiagramNodeProps) {
  return <Shape {...MANAGEMENT_GROUPS} {...props} />
}
