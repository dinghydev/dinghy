import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTERPRISE_BUILDING = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.enterprise',
  },
  _width: 30,
  _height: 50,
}

export function EnterpriseBuilding(props: NodeProps) {
  return (
    <Shape
      {...ENTERPRISE_BUILDING}
      {...props}
      _style={extendStyle(ENTERPRISE_BUILDING, props)}
    />
  )
}
