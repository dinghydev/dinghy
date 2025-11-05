import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CORPORATE_DATA_CENTER = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.corporate_data_center;fillColor=#7D7C7C;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#7D7C7C',
    },
  },
}

export function CorporateDataCenter(props: NodeProps) {
  return (
    <Shape
      {...CORPORATE_DATA_CENTER}
      {...props}
      _style={extendStyle(CORPORATE_DATA_CENTER, props)}
    />
  )
}
