import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_ONS_15310_MA_SDH_MULTISERVICE_PLATFORM = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ons_15310-ma_sdh_multiservice_platform;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 86,
  _original_height: 89,
}

export function CiscoOns15310MaSdhMultiservicePlatform(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_ONS_15310_MA_SDH_MULTISERVICE_PLATFORM)}
    />
  )
}
