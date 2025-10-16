import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_3 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#FCE7CD;strokeColor=none;shadow=0;',
  },
  _width: 2,
  _height: 95,
}

export function StepPyramid3(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_3}
      {...props}
      _style={extendStyle(STEP_PYRAMID_3, props)}
    />
  )
}
