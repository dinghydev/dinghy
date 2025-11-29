import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRAUD_PROTECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/FraudProtection.svg;strokeColor=none;',
  },
  _original_width: 60.12,
  _original_height: 68,
}

export function FraudProtection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FRAUD_PROTECTION)} />
}
