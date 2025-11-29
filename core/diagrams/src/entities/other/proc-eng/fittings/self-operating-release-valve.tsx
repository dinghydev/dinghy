import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SELF_OPERATING_RELEASE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.self-operating_release_valve2;',
  },
  _original_width: 105,
  _original_height: 105,
}

export function SelfOperatingReleaseValve(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SELF_OPERATING_RELEASE_VALVE)}
    />
  )
}
