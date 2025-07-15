import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_INFORMATION_PORTABLE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_information',
  _width: 100,
  _height: 79,
}

export function CloudInformationPortable(props: DiagramNodeProps) {
  return <Shape {...CLOUD_INFORMATION_PORTABLE} {...props} />
}
