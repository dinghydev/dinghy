import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_PROCESS_START_STATE_MULTI_STATE = {
  _style: {
    entity:
      'ellipse;shape=doubleEllipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;',
  },
  _width: 60,
  _height: 60,
}

export function MultipleProcessStartStateMultiState(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIPLE_PROCESS_START_STATE_MULTI_STATE}
      {...props}
      _style={extendStyle(MULTIPLE_PROCESS_START_STATE_MULTI_STATE, props)}
    />
  )
}
