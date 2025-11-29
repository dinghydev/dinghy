import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CORPORATE_DATA_CENTER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.corporate_data_center;',
  },
  _width: 53,
  _height: 78,
}

export function CorporateDataCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CORPORATE_DATA_CENTER)} />
}
