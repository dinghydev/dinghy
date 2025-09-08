import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW = {
  _style: {
    dependency: 'shape=flexArrow;endArrow=classic;html=1;',
  },
}

export function Arrow(props: DiagramNodeProps) {
  return <Dependency {...ARROW} {...props} _style={extendStyle(ARROW, props)} />
}
