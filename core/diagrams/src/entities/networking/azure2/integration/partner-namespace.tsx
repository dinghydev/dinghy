import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTNER_NAMESPACE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Namespace.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.8,
}

export function PartnerNamespace(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTNER_NAMESPACE)} />
}
