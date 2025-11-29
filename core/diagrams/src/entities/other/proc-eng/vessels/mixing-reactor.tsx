import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIXING_REACTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.mixing_reactor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 50,
  _height: 96,
}

export function MixingReactor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MIXING_REACTOR)} />
}
