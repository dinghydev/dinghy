import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_LOCATION_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wireless_location_appliance;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 98,
  _height: 54,
}

export function WirelessLocationAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_LOCATION_APPLIANCE}
      {...props}
      _style={extendStyle(WIRELESS_LOCATION_APPLIANCE, props)}
    />
  )
}
