import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_ONS_15310_CL_SONET_MULTISERVICE_PLATFORM = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ons_15310-cl_sonet_multiservice_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoOns15310ClSonetMultiservicePlatform(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        CISCO_ONS_15310_CL_SONET_MULTISERVICE_PLATFORM,
      )}
    />
  )
}
