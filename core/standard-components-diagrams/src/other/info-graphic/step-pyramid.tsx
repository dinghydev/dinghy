import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#F2931E;strokeColor=none;shadow=0;',
  },
  _original_width: 0,
  _original_height: 95,
}

export function StepPyramid(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID}
      {...props}
      _style={extendStyle(STEP_PYRAMID, props)}
    />
  )
}
