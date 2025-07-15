import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGEMENT_POINT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.management_point',
  _width: 48,
  _height: 50,
}

export function ManagementPoint(props: DiagramNodeProps) {
  return <Shape {...MANAGEMENT_POINT} {...props} />
}
