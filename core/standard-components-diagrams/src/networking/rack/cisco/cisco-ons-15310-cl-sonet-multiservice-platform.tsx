import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ONS_15310_CL_SONET_MULTISERVICE_PLATFORM = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ons_15310-cl_sonet_multiservice_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoOns15310ClSonetMultiservicePlatform(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_ONS_15310_CL_SONET_MULTISERVICE_PLATFORM}
      {...props}
      _style={extendStyle(
        CISCO_ONS_15310_CL_SONET_MULTISERVICE_PLATFORM,
        props,
      )}
    />
  )
}
