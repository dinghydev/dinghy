import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGEMENT_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Management_Groups.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function ManagementGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGEMENT_GROUPS}
      {...props}
      _style={extendStyle(MANAGEMENT_GROUPS, props)}
    />
  )
}
