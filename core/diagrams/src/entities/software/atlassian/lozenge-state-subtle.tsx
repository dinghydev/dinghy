import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOZENGE_STATE_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#DFE1E6;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  },
  _width: 70,
  _height: 20,
}

export function LozengeStateSubtle(props: NodeProps) {
  return (
    <Shape
      {...LOZENGE_STATE_SUBTLE}
      {...props}
      _style={extendStyle(LOZENGE_STATE_SUBTLE, props)}
    />
  )
}
