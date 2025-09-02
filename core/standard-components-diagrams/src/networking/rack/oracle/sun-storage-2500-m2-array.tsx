import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_STORAGE_2500_M2_ARRAY = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_storage_2500-m2_array;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function SunStorage2500M2Array(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_STORAGE_2500_M2_ARRAY}
      {...props}
      _style={extendStyle(SUN_STORAGE_2500_M2_ARRAY, props)}
    />
  )
}
