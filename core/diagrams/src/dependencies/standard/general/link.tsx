import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINK = {
  _style: {
    dependency: 'shape=link;html=1;',
  },
}

export function Link(props: NodeProps) {
  return <Dependency {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
