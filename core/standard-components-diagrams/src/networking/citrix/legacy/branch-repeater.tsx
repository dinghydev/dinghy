import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRANCH_REPEATER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.branch_repeater;',
  },
  _original_width: 100,
  _original_height: 39,
}

export function BranchRepeater(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRANCH_REPEATER}
      {...props}
      _style={extendStyle(BRANCH_REPEATER, props)}
    />
  )
}
