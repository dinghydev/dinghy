import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTNER_NAMESPACE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Namespace.svg;',
  _width: 68,
  _height: 60.8,
}

export function PartnerNamespace(props: DiagramNodeProps) {
  return <Shape {...PARTNER_NAMESPACE} {...props} />
}
