import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WHATS_NEW = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.whats_new;',
  _width: 55,
  _height: 38,
}

export function WhatsNew(props: DiagramNodeProps) {
  return <Shape {...WHATS_NEW} {...props} />
}
