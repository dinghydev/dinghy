import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_2U = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_physical_security_multiservice_platform_2u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoPhysicalSecurityMultiservicePlatform2u(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_2U} {...props} />
  )
}
