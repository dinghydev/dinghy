import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIOMETRIC_READER = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.biometric_reader;network2IconXOffset=0.00008;network2IconYOffset=0.00161;network2IconW=0.8407;network2IconH=0.9971;',
  },
  _original_width: 42.035,
  _original_height: 49.855,
}

export function BiometricReader(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BIOMETRIC_READER)} />
}
