import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_SPHERE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.storage_sphere;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 100,
}

export function StorageSphere(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_SPHERE)} />
}
