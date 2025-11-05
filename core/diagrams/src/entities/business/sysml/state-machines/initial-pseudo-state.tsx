import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INITIAL_PSEUDO_STATE = {
  _style: {
    entity:
      'shape=ellipse;html=1;fillColor=strokeColor;fontSize=18;fontColor=#ffffff;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function InitialPseudoState(props: NodeProps) {
  return (
    <Shape
      {...INITIAL_PSEUDO_STATE}
      {...props}
      _style={extendStyle(INITIAL_PSEUDO_STATE, props)}
    />
  )
}
