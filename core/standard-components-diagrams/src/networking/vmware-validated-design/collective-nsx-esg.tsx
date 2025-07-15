import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLECTIVE_NSX_ESG = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.collective_nsx_esg;',
  _width: 50,
  _height: 47.5,
}

export function CollectiveNsxEsg(props: DiagramNodeProps) {
  return <Shape {...COLLECTIVE_NSX_ESG} {...props} />
}
