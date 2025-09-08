import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_WAVE_7571 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_7571;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoWave7571(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAVE_7571}
      {...props}
      _style={extendStyle(CISCO_WAVE_7571, props)}
    />
  )
}
