import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADDRESS_BOOK_STORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.address_book_store;',
  _width: 50,
  _height: 54,
}

export function AddressBookStore(props: DiagramNodeProps) {
  return <Shape {...ADDRESS_BOOK_STORE} {...props} />
}
