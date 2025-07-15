import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_WAE_512 = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_wae-512;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoWae512(props: DiagramNodeProps) {
  return <Shape {...CISCO_WAE_512} {...props} />
}
