import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BRANCH_OFFICE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.branch_office;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 75,
}

export function BranchOffice(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRANCH_OFFICE}
      {...props}
      _style={extendStyle(BRANCH_OFFICE, props)}
    />
  )
}
