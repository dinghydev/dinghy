import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NON_AZURE_MACHINE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Non_Azure_Machine.svg;strokeColor=none;',
  _width: 31,
  _height: 50,
}

export function NonAzureMachine(props: DiagramNodeProps) {
  return <Shape {...NON_AZURE_MACHINE} {...props} />
}
