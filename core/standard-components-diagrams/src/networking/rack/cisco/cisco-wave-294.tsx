import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAVE_294 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_294;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoWave294(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAVE_294}
      {...props}
      _style={extendStyle(CISCO_WAVE_294, props)}
    />
  )
}
