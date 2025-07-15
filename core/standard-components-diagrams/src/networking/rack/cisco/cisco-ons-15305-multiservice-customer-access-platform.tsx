import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ONS_15305_MULTISERVICE_CUSTOMER_ACCESS_PLATFORM = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_ons_15305_multiservice_customer_access_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoOns15305MultiserviceCustomerAccessPlatform(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_ONS_15305_MULTISERVICE_CUSTOMER_ACCESS_PLATFORM}
      {...props}
    />
  )
}
