import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOTTED_LINE = {
  _style: {
    dependency: 'endArrow=none;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;',
  },
}

export function DottedLine(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, DOTTED_LINE)} />
}
