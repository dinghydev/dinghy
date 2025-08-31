import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INCLUDE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Include(props: DiagramNodeProps) {
  return (
    <Dependency {...INCLUDE} {...props} _style={extendStyle(INCLUDE, props)} />
  )
}
