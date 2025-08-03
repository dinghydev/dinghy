import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOFTWARE_AS_A_SERVICE_SAAS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Software_as_a_Service.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function SoftwareAsAServiceSaas(props: DiagramNodeProps) {
  return <Shape {...SOFTWARE_AS_A_SERVICE_SAAS} {...props} />
}
