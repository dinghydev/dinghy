import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAVE_7541 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wave_7541;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoWave7541(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAVE_7541}
      {...props}
      _style={extendStyle(CISCO_WAVE_7541, props)}
    />
  )
}
