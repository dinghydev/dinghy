import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_2U = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_physical_security_multiservice_platform_2u;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoPhysicalSecurityMultiservicePlatform2u(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_2U}
      {...props}
      _style={extendStyle(
        CISCO_PHYSICAL_SECURITY_MULTISERVICE_PLATFORM_2U,
        props,
      )}
    />
  )
}
