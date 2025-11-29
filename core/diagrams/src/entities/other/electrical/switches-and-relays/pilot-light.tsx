import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PILOT_LIGHT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pilot_light;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PilotLight(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PILOT_LIGHT)} />
}
