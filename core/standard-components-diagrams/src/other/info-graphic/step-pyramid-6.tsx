import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_6 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#2F5B7C;strokeColor=none;shadow=0;',
  _width: 5,
  _height: 95,
}

export function StepPyramid6(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_6} {...props} />
}
