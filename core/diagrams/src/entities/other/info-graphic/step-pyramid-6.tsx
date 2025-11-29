import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_6 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#2F5B7C;strokeColor=none;shadow=0;',
  },
  _width: 5,
  _height: 95,
}

export function StepPyramid6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEP_PYRAMID_6)} />
}
