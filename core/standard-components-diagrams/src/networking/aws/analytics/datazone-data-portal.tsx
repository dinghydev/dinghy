import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATAZONE_DATA_PORTAL = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.datazone_data_portal;',
  _width: 78,
  _height: 78,
}

export function DatazoneDataPortal(props: DiagramNodeProps) {
  return <Shape {...DATAZONE_DATA_PORTAL} {...props} />
}
