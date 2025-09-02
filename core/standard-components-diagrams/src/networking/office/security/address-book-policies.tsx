import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDRESS_BOOK_POLICIES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.address_book_policies;',
  },
  _original_width: 55,
  _original_height: 53,
}

export function AddressBookPolicies(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADDRESS_BOOK_POLICIES}
      {...props}
      _style={extendStyle(ADDRESS_BOOK_POLICIES, props)}
    />
  )
}
