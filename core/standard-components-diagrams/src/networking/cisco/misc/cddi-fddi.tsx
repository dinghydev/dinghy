import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CDDI_FDDI = {
  _style:
    'shape=mxgraph.cisco.misc.cddi_fddi;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 50,
}

export function CddiFddi(props: DiagramNodeProps) {
  return <Shape {...CDDI_FDDI} {...props} />
}
