import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHYSICAL_STORAGE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.physical_storage;',
  },
  _width: 108,
  _height: 60,
}

export function PhysicalStorage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHYSICAL_STORAGE)} />
}
