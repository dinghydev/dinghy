import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_8 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#333333;strokeColor=none;shadow=0;',
  },
  _original_width: 7,
  _original_height: 95,
}

export function StepPyramid8(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_8}
      {...props}
      _style={extendStyle(STEP_PYRAMID_8, props)}
    />
  )
}
