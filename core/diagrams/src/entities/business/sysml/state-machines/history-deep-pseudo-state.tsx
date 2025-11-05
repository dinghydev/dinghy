import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HISTORY_DEEP_PSEUDO_STATE = {
  _style: {
    entity: 'shape=ellipse;html=1;fontSize=18;align=center;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function HistoryDeepPseudoState(props: NodeProps) {
  return (
    <Shape
      {...HISTORY_DEEP_PSEUDO_STATE}
      {...props}
      _style={extendStyle(HISTORY_DEEP_PSEUDO_STATE, props)}
    />
  )
}
