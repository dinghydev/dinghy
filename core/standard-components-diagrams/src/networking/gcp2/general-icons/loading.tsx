import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOADING = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.loading',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Loading(props: DiagramNodeProps) {
  return <Shape {...LOADING} {...props} _style={extendStyle(LOADING, props)} />
}
