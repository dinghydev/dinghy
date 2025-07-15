import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORPORATE_DATA_CENTER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.corporate_data_center;',
  _width: 60,
  _height: 60,
}

export function CorporateDataCenter(props: DiagramNodeProps) {
  return <Shape {...CORPORATE_DATA_CENTER} {...props} />
}
