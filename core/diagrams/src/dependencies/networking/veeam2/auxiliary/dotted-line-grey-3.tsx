import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOTTED_LINE_GREY_3 = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#404040;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=none;endFill=0;startArrow=none;dashed=1;',
  },
}

export function DottedLineGrey3(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, DOTTED_LINE_GREY_3)} />
  )
}
