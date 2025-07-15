import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ASA_5585_X_ADAPTIVE_SECURITY_APPLIANCE = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asa_5585-x_adaptive_security_appliance;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoAsa5585XAdaptiveSecurityAppliance(
  props: DiagramNodeProps,
) {
  return <Shape {...CISCO_ASA_5585_X_ADAPTIVE_SECURITY_APPLIANCE} {...props} />
}
