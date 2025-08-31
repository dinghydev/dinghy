import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINE = {
  _style: {
    dependency: 'endArrow=none;html=1;',
  },
}

export function Line(props: DiagramNodeProps) {
  return <Dependency {...LINE} {...props} _style={extendStyle(LINE, props)} />
}
