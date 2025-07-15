import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_HANA_ON_AZURE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SAP_HANA_on_Azure.svg;',
  _width: 50,
  _height: 25,
}

export function SapHanaOnAzure(props: DiagramNodeProps) {
  return <Shape {...SAP_HANA_ON_AZURE} {...props} />
}
