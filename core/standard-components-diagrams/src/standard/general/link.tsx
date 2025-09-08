import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINK = {
  _style: {
    dependency: 'shape=link;html=1;',
  },
}

export function Link(props: DiagramNodeProps) {
  return <Dependency {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
