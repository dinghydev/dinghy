import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ONS_15454_SONET_SDH_MULTISERVICE_PROVISIONING_PLATFORM = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_ons_15454_sonet-sdh_multiservice_provisioning_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 157,
}

export function CiscoOns15454SonetSdhMultiserviceProvisioningPlatform(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_ONS_15454_SONET_SDH_MULTISERVICE_PROVISIONING_PLATFORM}
      {...props}
      _style={extendStyle(
        CISCO_ONS_15454_SONET_SDH_MULTISERVICE_PROVISIONING_PLATFORM,
        props,
      )}
    />
  )
}
