import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_1U = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_physical_security_multiservice_platform_1u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoPhysicalSecurityMultiservicePlatform1u(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_1U}
      {...props}
      _style={extendStyle(
        CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_1U,
        props,
      )}
    />
  )
}
