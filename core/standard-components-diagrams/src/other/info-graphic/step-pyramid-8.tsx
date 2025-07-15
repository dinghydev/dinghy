import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_8 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#333333;strokeColor=none;shadow=0;',
  _width: 7,
  _height: 95,
}

export function StepPyramid8(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_8} {...props} />
}
