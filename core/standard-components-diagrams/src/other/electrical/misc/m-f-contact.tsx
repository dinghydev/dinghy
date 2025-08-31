import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const M_F_CONTACT = {
  _style: {
    dependency: 'endArrow=open;html=1;strokeWidth=1;endFill=0;endSize=20;',
  },
}

export function MFContact(props: DiagramNodeProps) {
  return (
    <Dependency
      {...M_F_CONTACT}
      {...props}
      _style={extendStyle(M_F_CONTACT, props)}
    />
  )
}
