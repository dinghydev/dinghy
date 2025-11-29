import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTNER_REGISTRATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Registration.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.2,
}

export function PartnerRegistration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTNER_REGISTRATION)} />
}
