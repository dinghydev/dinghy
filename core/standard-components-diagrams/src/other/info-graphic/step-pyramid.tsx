import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_PYRAMID = {
  _style:
    'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#F2931E;strokeColor=none;shadow=0;',
  _width: 0,
  _height: 95,
}

export function StepPyramid(props: DiagramNodeProps) {
  return <Shape {...STEP_PYRAMID} {...props} />
}
