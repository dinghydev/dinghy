import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_7 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _width: 6,
  _height: 95,
}

export function StepPyramid7(props: NodeProps) {
  return (
    <Shape
      {...STEP_PYRAMID_7}
      {...props}
      _style={extendStyle(STEP_PYRAMID_7, props)}
    />
  )
}
