import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID_2 = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#F8C382;strokeColor=none;shadow=0;',
  _width: 1,
  _height: 95,
}

export function StepPyramid2(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID_2} {...props} />
}
