import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INITIAL_PSEUDO_STATE = {
  _style:
    'shape=ellipse;html=1;fillColor=strokeColor;fontSize=18;fontColor=#ffffff;',
  _width: 40,
  _height: 40,
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
