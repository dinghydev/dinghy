import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_STORAGE_2500_M2_ARRAY = {
  _style:
    'shape=mxgraph.rack.oracle.sun_storage_2500-m2_array;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function SunStorage2500M2Array(props: DiagramNodeProps) {
  return <Shape {...SUN_STORAGE_2500_M2_ARRAY} {...props} />
}
