import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGEMENT_POINT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.management_point',
  },
  _original_width: 48,
  _original_height: 50,
}

export function ManagementPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGEMENT_POINT}
      {...props}
      _style={extendStyle(MANAGEMENT_POINT, props)}
    />
  )
}
