import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFLINE_ADDRESS_BOOK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.offline_address_book;',
  },
  _width: 59,
  _height: 53,
}

export function OfflineAddressBook(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFLINE_ADDRESS_BOOK}
      {...props}
      _style={extendStyle(OFFLINE_ADDRESS_BOOK, props)}
    />
  )
}
