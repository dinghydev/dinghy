import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORPORATE_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#6ABD46;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.085,0.085,0],[0.915,0.085,0],[0.915,0.915,0],[0.085,0.915,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=mxgraph.cisco_safe.architecture.generic_appliance;resIcon=mxgraph.cisco_safe.architecture.corporate_device1;',
  },
  _width: 60,
  _height: 60,
}

export function CorporateDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...CORPORATE_DEVICE}
      {...props}
      _style={extendStyle(CORPORATE_DEVICE, props)}
    />
  )
}
