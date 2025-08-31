import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOADING = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.loading',
  },
  _width: 60,
  _height: 60,
}

export function Loading(props: DiagramNodeProps) {
  return <Shape {...LOADING} {...props} _style={extendStyle(LOADING, props)} />
}
