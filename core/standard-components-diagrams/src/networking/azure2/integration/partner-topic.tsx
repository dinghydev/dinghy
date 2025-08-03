import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTNER_TOPIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Topic.svg;strokeColor=none;',
  _width: 68,
  _height: 61,
}

export function PartnerTopic(props: DiagramNodeProps) {
  return <Shape {...PARTNER_TOPIC} {...props} />
}
