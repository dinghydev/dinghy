import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELAY_CONTACTS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay_contacts;',
  },
  _original_width: 30,
  _original_height: 24,
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
