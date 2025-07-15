import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTACT_ACQUIRER = {
  _style:
    'shape=mxgraph.cisco.misc.contact_acquirer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 96,
  _height: 64,
}

export function ContactAcquirer(props: DiagramNodeProps) {
  return <Shape {...CONTACT_ACQUIRER} {...props} />
}
