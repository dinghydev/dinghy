import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGEMENT_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Management_Groups.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function ManagementGroups(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANAGEMENT_GROUPS)} />
}
