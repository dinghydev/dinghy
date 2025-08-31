import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HISTORY_DEEP_PSEUDO_STATE = {
  _style: {
    entity: 'shape=ellipse;html=1;fontSize=18;align=center;',
  },
  _width: 40,
  _height: 40,
}

export function HistoryDeepPseudoState(props: DiagramNodeProps) {
  return (
    <Shape
      {...HISTORY_DEEP_PSEUDO_STATE}
      {...props}
      _style={extendStyle(HISTORY_DEEP_PSEUDO_STATE, props)}
    />
  )
}
