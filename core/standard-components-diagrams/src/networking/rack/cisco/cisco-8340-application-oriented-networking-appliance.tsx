import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_8340_APPLICATION_ORIENTED_NETWORKING_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_8340_application-oriented_networking_appliance;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function Cisco8340ApplicationOrientedNetworkingAppliance(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_8340_APPLICATION_ORIENTED_NETWORKING_APPLIANCE}
      {...props}
      _style={extendStyle(
        CISCO_8340_APPLICATION_ORIENTED_NETWORKING_APPLIANCE,
        props,
      )}
    />
  )
}
