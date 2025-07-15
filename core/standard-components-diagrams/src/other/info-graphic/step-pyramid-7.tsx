import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_7 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#23445D;strokeColor=none;shadow=0;',
  _width: 6,
  _height: 95,
}

export function StepPyramid7(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_7} {...props} />
}
