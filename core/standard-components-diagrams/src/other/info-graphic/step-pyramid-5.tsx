import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_5 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#5D7F99;strokeColor=none;shadow=0;',
  _width: 4,
  _height: 95,
}

export function StepPyramid5(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_5} {...props} />
}
