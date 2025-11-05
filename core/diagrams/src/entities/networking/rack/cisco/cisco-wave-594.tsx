import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_WAVE_594 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_594;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoWave594(props: NodeProps) {
  return (
    <Shape
      {...CISCO_WAVE_594}
      {...props}
      _style={extendStyle(CISCO_WAVE_594, props)}
    />
  )
}
