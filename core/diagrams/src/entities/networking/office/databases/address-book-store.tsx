import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADDRESS_BOOK_STORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.address_book_store;',
  },
  _original_width: 50,
  _original_height: 54,
}

export function AddressBookStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ADDRESS_BOOK_STORE)} />
}
