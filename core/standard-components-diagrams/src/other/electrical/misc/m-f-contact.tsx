import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const M_F_CONTACT = {
  _style: 'endArrow=open;html=1;strokeWidth=1;endFill=0;endSize=20;',
  _width: 100,
  _height: 0,
}

export function MFContact(props: DiagramNodeProps) {
  return <Dependency {...M_F_CONTACT} {...props} />
}
