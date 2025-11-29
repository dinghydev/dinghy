import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEP_PYRAMID_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.pyramidStep;fillColor=#BAC8D3;strokeColor=none;shadow=0;',
  },
  _width: 3,
  _height: 95,
}

export function StepPyramid4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEP_PYRAMID_4)} />
}
