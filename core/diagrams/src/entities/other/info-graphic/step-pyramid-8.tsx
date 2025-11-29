import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_8 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#333333;strokeColor=none;shadow=0;',
  },
  _width: 7,
  _height: 95,
}

export function StepPyramid8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEP_PYRAMID_8)} />
}
