import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHONE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.phone_android',
  _width: 56,
  _height: 100,
}

export function Phone(props: DiagramNodeProps) {
  return <Shape {...PHONE} {...props} />
}
