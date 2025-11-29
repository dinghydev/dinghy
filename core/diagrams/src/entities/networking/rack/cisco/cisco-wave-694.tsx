import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_WAVE_694 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_694;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoWave694(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_WAVE_694)} />
}
