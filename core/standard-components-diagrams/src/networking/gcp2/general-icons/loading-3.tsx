import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOADING_3 = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.loading_3',
  _width: 60,
  _height: 60,
}

export function Loading3(props: DiagramNodeProps) {
  return (
    <Shape {...LOADING_3} {...props} _style={extendStyle(LOADING_3, props)} />
  )
}
