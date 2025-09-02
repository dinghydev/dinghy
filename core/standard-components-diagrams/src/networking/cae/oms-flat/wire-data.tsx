import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRE_DATA = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.wire_data',
  },
  _original_width: 50,
  _original_height: 50,
}

export function WireData(props: DiagramNodeProps) {
  return (
    <Shape {...WIRE_DATA} {...props} _style={extendStyle(WIRE_DATA, props)} />
  )
}
