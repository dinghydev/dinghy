import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_LOCKBOX_FOR_MS_AZURE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Customer_Lockbox_for_MS_Azure.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.4,
}

export function CustomerLockboxForMsAzure(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CUSTOMER_LOCKBOX_FOR_MS_AZURE)}
    />
  )
}
