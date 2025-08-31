import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORPORATE_DATA_CENTER = {
  _style: {
    group:
      'dashed=0;html=1;shape=mxgraph.aws3.corporate_data_center;fillColor=#7D7C7C;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#7D7C7C',
    },
  },
}

export function CorporateDataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CORPORATE_DATA_CENTER}
      {...props}
      _style={extendStyle(CORPORATE_DATA_CENTER, props)}
    />
  )
}
