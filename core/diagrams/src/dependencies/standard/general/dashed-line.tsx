import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DASHED_LINE = {
  _style: {
    dependency: 'endArrow=none;dashed=1;html=1;',
  },
}

export function DashedLine(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, DASHED_LINE)} />
}
