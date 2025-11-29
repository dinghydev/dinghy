import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNAL_MEDICINE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.internal_medicine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 71,
  _height: 98,
}

export function InternalMedicine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERNAL_MEDICINE)} />
}
