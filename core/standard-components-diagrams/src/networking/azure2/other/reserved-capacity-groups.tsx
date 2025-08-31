import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESERVED_CAPACITY_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Reserved_Capacity_Groups.svg;strokeColor=none;',
  },
  _width: 57.99999999999999,
  _height: 68,
}

export function ReservedCapacityGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESERVED_CAPACITY_GROUPS}
      {...props}
      _style={extendStyle(RESERVED_CAPACITY_GROUPS, props)}
    />
  )
}
