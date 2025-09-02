import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADDRESS_BOOK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.address_book;',
  },
  _original_width: 55,
  _original_height: 44,
}

export function AddressBook(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADDRESS_BOOK}
      {...props}
      _style={extendStyle(ADDRESS_BOOK, props)}
    />
  )
}
