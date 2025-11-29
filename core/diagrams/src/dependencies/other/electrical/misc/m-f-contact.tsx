import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const M_F_CONTACT = {
  _style: {
    dependency: 'endArrow=open;html=1;strokeWidth=1;endFill=0;endSize=20;',
  },
}

export function MFContact(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, M_F_CONTACT)} />
}
