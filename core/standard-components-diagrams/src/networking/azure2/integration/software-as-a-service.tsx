import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOFTWARE_AS_A_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Software_as_a_Service.svg;strokeColor=none;',
  _width: 64,
  _height: 53,
}

export function SoftwareAsAService(props: DiagramNodeProps) {
  return <Shape {...SOFTWARE_AS_A_SERVICE} {...props} />
}
