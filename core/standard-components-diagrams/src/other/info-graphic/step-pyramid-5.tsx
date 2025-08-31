import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP_PYRAMID_5 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#5D7F99;strokeColor=none;shadow=0;',
  },
  _width: 4,
  _height: 95,
}

export function StepPyramid5(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_5}
      {...props}
      _style={extendStyle(STEP_PYRAMID_5, props)}
    />
  )
}
