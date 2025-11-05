import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVAILABILITY_SETS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machines_Availability_Set.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AvailabilitySets(props: NodeProps) {
  return (
    <Shape
      {...AVAILABILITY_SETS}
      {...props}
      _style={extendStyle(AVAILABILITY_SETS, props)}
    />
  )
}
