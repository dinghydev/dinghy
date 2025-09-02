import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAVE_8541 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_8541;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoWave8541(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAVE_8541}
      {...props}
      _style={extendStyle(CISCO_WAVE_8541, props)}
    />
  )
}
