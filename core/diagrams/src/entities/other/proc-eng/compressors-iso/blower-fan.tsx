import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOWER_FAN = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.blower,_fan;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BlowerFan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLOWER_FAN)} />
}
