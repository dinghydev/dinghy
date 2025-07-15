import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORPORATE_DATA_CENTER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.corporate_data_center;fillColor=#7D7C7C;gradientColor=none;',
  _width: 46.5,
  _height: 63,
}

export function CorporateDataCenter(props: DiagramNodeProps) {
  return <Shape {...CORPORATE_DATA_CENTER} {...props} />
}
