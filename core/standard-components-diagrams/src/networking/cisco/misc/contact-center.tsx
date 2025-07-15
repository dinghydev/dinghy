import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTACT_CENTER = {
  _style:
    'shape=mxgraph.cisco.misc.contact_center;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 66,
}

export function ContactCenter(props: DiagramNodeProps) {
  return <Shape {...CONTACT_CENTER} {...props} />
}
