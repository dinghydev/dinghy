import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_WAE_512 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wae-512;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoWae512(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_WAE_512}
      {...props}
      _style={extendStyle(CISCO_WAE_512, props)}
    />
  )
}
