import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINE = {
  _style: {
    dependency: 'endArrow=none;html=1;',
  },
}

export function Line(props: DiagramNodeProps) {
  return <Dependency {...LINE} {...props} _style={extendStyle(LINE, props)} />
}
