import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RELAY_CONTACTS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay_contacts;',
  _width: 30,
  _height: 24,
}

export function RelayContacts(props: DiagramNodeProps) {
  return (
    <Shape
      {...RELAY_CONTACTS}
      {...props}
      _style={extendStyle(RELAY_CONTACTS, props)}
    />
  )
}
