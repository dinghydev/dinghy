import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BRANCH_OFFICE = {
  _style:
    'shape=mxgraph.cisco.buildings.branch_office;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 51,
  _height: 75,
}

export function BranchOffice(props: DiagramNodeProps) {
  return <Shape {...BRANCH_OFFICE} {...props} />
}
