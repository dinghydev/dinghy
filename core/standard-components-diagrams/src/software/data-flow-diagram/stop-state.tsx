import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STOP_STATE = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;strokeWidth=5;perimeter=ellipsePerimeter;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function StopState(props: DiagramNodeProps) {
  return (
    <Shape {...STOP_STATE} {...props} _style={extendStyle(STOP_STATE, props)} />
  )
}
