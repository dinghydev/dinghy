import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HPC_WORKBENCH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_HPC_Workbench.svg;strokeColor=none;',
  _width: 55.60000000000001,
  _height: 68,
}

export function HpcWorkbench(props: DiagramNodeProps) {
  return <Shape {...HPC_WORKBENCH} {...props} />
}
