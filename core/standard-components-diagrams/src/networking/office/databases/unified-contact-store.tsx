import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIFIED_CONTACT_STORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.unified_contact_store;',
  },
  _width: 54,
  _height: 55,
}

export function UnifiedContactStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNIFIED_CONTACT_STORE}
      {...props}
      _style={extendStyle(UNIFIED_CONTACT_STORE, props)}
    />
  )
}
