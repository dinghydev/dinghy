import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_PROTECTION_APPLIANCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#6ABD46;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.085,0.085,0],[0.915,0.085,0],[0.915,0.915,0],[0.085,0.915,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=mxgraph.cisco_safe.architecture.generic_appliance;resIcon=mxgraph.cisco_safe.architecture.ddos_protection_appliance;',
  },
  _width: 60,
  _height: 60,
}

export function DdosProtectionAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDOS_PROTECTION_APPLIANCE}
      {...props}
      _style={extendStyle(DDOS_PROTECTION_APPLIANCE, props)}
    />
  )
}
