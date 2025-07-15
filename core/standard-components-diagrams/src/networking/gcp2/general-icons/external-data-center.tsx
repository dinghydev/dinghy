import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTERNAL_DATA_CENTER = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.external_data_center',
  _width: 77,
  _height: 100,
}

export function ExternalDataCenter(props: DiagramNodeProps) {
  return <Shape {...EXTERNAL_DATA_CENTER} {...props} />
}
