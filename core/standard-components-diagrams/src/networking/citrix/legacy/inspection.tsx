import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSPECTION = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.inspection;',
  _width: 70,
  _height: 65,
}

export function Inspection(props: DiagramNodeProps) {
  return <Shape {...INSPECTION} {...props} />
}
