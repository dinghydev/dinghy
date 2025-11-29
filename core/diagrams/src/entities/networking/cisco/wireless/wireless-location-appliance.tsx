import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WIRELESS_LOCATION_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wireless_location_appliance;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 98,
  _height: 54,
}

export function WirelessLocationAppliance(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, WIRELESS_LOCATION_APPLIANCE)}
    />
  )
}
