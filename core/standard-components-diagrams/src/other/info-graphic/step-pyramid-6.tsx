import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP_PYRAMID_6 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#2F5B7C;strokeColor=none;shadow=0;',
  },
  _width: 5,
  _height: 95,
}

export function StepPyramid6(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_6}
      {...props}
      _style={extendStyle(STEP_PYRAMID_6, props)}
    />
  )
}
