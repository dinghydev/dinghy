import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGEMENT_GROUPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Management_Groups.svg;strokeColor=none;',
  _width: 50,
  _height: 40,
}

export function ManagementGroups(props: DiagramNodeProps) {
  return <Shape {...MANAGEMENT_GROUPS} {...props} />
}
