import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTERPRISE_BUILDING = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.enterprise',
  },
  _original_width: 30,
  _original_height: 50,
}

export function EnterpriseBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTERPRISE_BUILDING}
      {...props}
      _style={extendStyle(ENTERPRISE_BUILDING, props)}
    />
  )
}
