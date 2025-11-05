import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIPE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;strokeColor=#808080;endArrow=block;endSize=10;dashed=0;verticalAlign=bottom;strokeWidth=2;',
  },
}

export function Pipe(props: NodeProps) {
  return <Dependency {...PIPE} {...props} _style={extendStyle(PIPE, props)} />
}
