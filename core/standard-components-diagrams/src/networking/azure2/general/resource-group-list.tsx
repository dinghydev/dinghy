import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_GROUP_LIST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Group_List.svg;',
  _width: 68,
  _height: 67,
}

export function ResourceGroupList(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_GROUP_LIST} {...props} />
}
