import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INITIAL_PSEUDO_STATE = {
  _style: {
    entity:
      'shape=ellipse;html=1;fillColor=strokeColor;fontSize=18;fontColor=#ffffff;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function InitialPseudoState(props: DiagramNodeProps) {
  return (
    <Shape
      {...INITIAL_PSEUDO_STATE}
      {...props}
      _style={extendStyle(INITIAL_PSEUDO_STATE, props)}
    />
  )
}
