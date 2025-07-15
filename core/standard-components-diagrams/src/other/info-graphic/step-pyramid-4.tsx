import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_4 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#BAC8D3;strokeColor=none;shadow=0;',
  _width: 3,
  _height: 95,
}

export function StepPyramid4(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_4} {...props} />
}
