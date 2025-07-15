import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORK_PACKAGE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.workPackage;strokeWidth=5;',
  _width: 60,
  _height: 50,
}

export function WorkPackage2(props: DiagramNodeProps) {
  return <Shape {...WORK_PACKAGE_2} {...props} />
}
