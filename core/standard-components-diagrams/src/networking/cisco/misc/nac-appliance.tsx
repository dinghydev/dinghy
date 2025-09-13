import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAC_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nac_appliance;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 86,
  _height: 66,
}

export function NacAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAC_APPLIANCE}
      {...props}
      _style={extendStyle(NAC_APPLIANCE, props)}
    />
  )
}
