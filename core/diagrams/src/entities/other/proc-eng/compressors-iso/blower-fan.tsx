import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BLOWER_FAN = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.blower,_fan;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BlowerFan(props: DiagramNodeProps) {
  return (
    <Shape {...BLOWER_FAN} {...props} _style={extendStyle(BLOWER_FAN, props)} />
  )
}
