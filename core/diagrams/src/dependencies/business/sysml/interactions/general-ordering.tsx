import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERAL_ORDERING = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;dashed=1;strokeWidth=2;',
  },
}

export function GeneralOrdering(props: DiagramNodeProps) {
  return (
    <Dependency
      {...GENERAL_ORDERING}
      {...props}
      _style={extendStyle(GENERAL_ORDERING, props)}
    />
  )
}
