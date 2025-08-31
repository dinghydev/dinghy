import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP_PYRAMID_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#BAC8D3;strokeColor=none;shadow=0;',
  },
  _width: 3,
  _height: 95,
}

export function StepPyramid4(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_4}
      {...props}
      _style={extendStyle(STEP_PYRAMID_4, props)}
    />
  )
}
