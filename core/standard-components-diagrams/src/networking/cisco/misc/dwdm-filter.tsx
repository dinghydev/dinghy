import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DWDM_FILTER = {
  _style:
    'shape=mxgraph.cisco.misc.dwdm_filter;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 51,
  _height: 70,
}

export function DwdmFilter(props: DiagramNodeProps) {
  return <Shape {...DWDM_FILTER} {...props} />
}
