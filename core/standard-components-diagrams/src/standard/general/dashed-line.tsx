import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DASHED_LINE = {
  _style: {
    dependency: 'endArrow=none;dashed=1;html=1;',
  },
}

export function DashedLine(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DASHED_LINE}
      {...props}
      _style={extendStyle(DASHED_LINE, props)}
    />
  )
}
