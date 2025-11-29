import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIPLE_PROCESS_START_STATE_MULTI_STATE = {
  _style: {
    entity:
      'ellipse;shape=doubleEllipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function MultipleProcessStartStateMultiState(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MULTIPLE_PROCESS_START_STATE_MULTI_STATE)}
    />
  )
}
