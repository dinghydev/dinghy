import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_BLADE_6000_ENCLOSURE = {
  _style:
    'shape=mxgraph.rack.oracle.sun_blade_6000_enclosure;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 149,
}

export function SunBlade6000Enclosure(props: DiagramNodeProps) {
  return <Shape {...SUN_BLADE_6000_ENCLOSURE} {...props} />
}
