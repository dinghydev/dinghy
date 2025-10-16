import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_APPLIANCE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.virtual_appliance;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function VirtualAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_APPLIANCE}
      {...props}
      _style={extendStyle(VIRTUAL_APPLIANCE, props)}
    />
  )
}
