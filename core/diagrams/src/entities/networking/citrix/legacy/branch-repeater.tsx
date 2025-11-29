import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRANCH_REPEATER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.branch_repeater;',
  },
  _width: 100,
  _height: 39,
}

export function BranchRepeater(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BRANCH_REPEATER)} />
}
