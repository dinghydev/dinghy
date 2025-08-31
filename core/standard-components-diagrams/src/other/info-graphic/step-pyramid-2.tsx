import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP_PYRAMID_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#F8C382;strokeColor=none;shadow=0;',
  },
  _width: 1,
  _height: 95,
}

export function StepPyramid2(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_2}
      {...props}
      _style={extendStyle(STEP_PYRAMID_2, props)}
    />
  )
}
