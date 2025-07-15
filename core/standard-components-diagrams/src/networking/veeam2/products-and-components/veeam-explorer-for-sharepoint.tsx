import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_EXPLORER_FOR_SHAREPOINT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_explorer_for_sharepoint;',
  _width: 34,
  _height: 34,
}

export function VeeamExplorerForSharepoint(props: DiagramNodeProps) {
  return <Shape {...VEEAM_EXPLORER_FOR_SHAREPOINT} {...props} />
}
