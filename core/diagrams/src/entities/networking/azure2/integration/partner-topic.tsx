import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTNER_TOPIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Topic.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 61,
}

export function PartnerTopic(props: NodeProps) {
  return (
    <Shape
      {...PARTNER_TOPIC}
      {...props}
      _style={extendStyle(PARTNER_TOPIC, props)}
    />
  )
}
