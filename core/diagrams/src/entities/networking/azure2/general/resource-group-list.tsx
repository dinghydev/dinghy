import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESOURCE_GROUP_LIST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Group_List.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67,
}

export function ResourceGroupList(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_GROUP_LIST}
      {...props}
      _style={extendStyle(RESOURCE_GROUP_LIST, props)}
    />
  )
}
