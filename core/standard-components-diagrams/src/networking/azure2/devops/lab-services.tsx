import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAB_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Lab_Services.svg;strokeColor=none;',
  _width: 66,
  _height: 64,
}

export function LabServices(props: DiagramNodeProps) {
  return <Shape {...LAB_SERVICES} {...props} />
}
