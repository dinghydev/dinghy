import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHYSICAL_STORAGE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.physical_storage;',
  },
  _original_width: 108,
  _original_height: 60,
}

export function PhysicalStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_STORAGE}
      {...props}
      _style={extendStyle(PHYSICAL_STORAGE, props)}
    />
  )
}
