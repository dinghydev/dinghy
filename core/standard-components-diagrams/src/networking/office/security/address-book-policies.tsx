import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADDRESS_BOOK_POLICIES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.address_book_policies;',
  _width: 55,
  _height: 53,
}

export function AddressBookPolicies(props: DiagramNodeProps) {
  return <Shape {...ADDRESS_BOOK_POLICIES} {...props} />
}
