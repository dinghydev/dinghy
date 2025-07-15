import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTACTS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.contacts;',
  _width: 53,
  _height: 39,
}

export function Contacts(props: DiagramNodeProps) {
  return <Shape {...CONTACTS} {...props} />
}
