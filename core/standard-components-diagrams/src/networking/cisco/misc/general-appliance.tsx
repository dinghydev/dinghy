import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERAL_APPLIANCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.general_appliance;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 58,
}

export function GeneralAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERAL_APPLIANCE}
      {...props}
      _style={extendStyle(GENERAL_APPLIANCE, props)}
    />
  )
}
