import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIPLE_PROCESS_START_STATE_MULTI_STATE = {
  _style:
    'ellipse;shape=doubleEllipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;',
  _width: 60,
  _height: 60,
}

export function MultipleProcessStartStateMultiState(props: DiagramNodeProps) {
  return <Shape {...MULTIPLE_PROCESS_START_STATE_MULTI_STATE} {...props} />
}
