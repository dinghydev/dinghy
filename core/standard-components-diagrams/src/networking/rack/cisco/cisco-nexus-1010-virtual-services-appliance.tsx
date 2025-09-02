import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_NEXUS_1010_VIRTUAL_SERVICES_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_1010_virtual_services_appliance;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoNexus1010VirtualServicesAppliance(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_NEXUS_1010_VIRTUAL_SERVICES_APPLIANCE}
      {...props}
      _style={extendStyle(CISCO_NEXUS_1010_VIRTUAL_SERVICES_APPLIANCE, props)}
    />
  )
}
