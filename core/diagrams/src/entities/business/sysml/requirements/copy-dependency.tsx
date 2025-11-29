import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COPY_DEPENDENCY = {
  _style: {
    entity: 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;',
  },
  _width: 2,
  _height: 60,
}

export function CopyDependency(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COPY_DEPENDENCY)} />
}
