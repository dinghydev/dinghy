import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_MACHINES_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Virtual_Machines_Classic.svg;strokeColor=none;',
  _width: 69,
  _height: 64,
}

export function VirtualMachinesClassic(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_MACHINES_CLASSIC} {...props} />
}
