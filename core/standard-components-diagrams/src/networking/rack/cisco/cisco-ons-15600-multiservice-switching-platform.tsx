import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_ONS_15600_MULTISERVICE_SWITCHING_PLATFORM = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ons_15600_multiservice_switching_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 201,
  _height: 212,
}

export function CiscoOns15600MultiserviceSwitchingPlatform(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_ONS_15600_MULTISERVICE_SWITCHING_PLATFORM}
      {...props}
      _style={extendStyle(
        CISCO_ONS_15600_MULTISERVICE_SWITCHING_PLATFORM,
        props,
      )}
    />
  )
}
