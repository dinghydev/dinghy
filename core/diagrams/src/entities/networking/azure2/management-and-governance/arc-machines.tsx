import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARC_MACHINES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Arc_Machines.svg;strokeColor=none;',
  },
  _original_width: 64.75999999999999,
  _original_height: 68,
}

export function ArcMachines(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_MACHINES}
      {...props}
      _style={extendStyle(ARC_MACHINES, props)}
    />
  )
}
