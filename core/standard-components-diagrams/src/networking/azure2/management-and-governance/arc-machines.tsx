import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_MACHINES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Arc_Machines.svg;',
  _width: 64.75999999999999,
  _height: 68,
}

export function ArcMachines(props: DiagramNodeProps) {
  return <Shape {...ARC_MACHINES} {...props} />
}
