import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VMWARE_SOLUTION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_vmware_solution/AVS.svg;',
  _width: 68,
  _height: 54.2,
}

export function VmwareSolution(props: DiagramNodeProps) {
  return <Shape {...VMWARE_SOLUTION} {...props} />
}
