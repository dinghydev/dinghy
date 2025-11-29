import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THERMAL_ELEMENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermal_element',
  },
  _width: 100,
  _height: 32,
}

export function ThermalElement(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THERMAL_ELEMENT)} />
}
