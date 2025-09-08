import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOADING_3 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.loading_3',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Loading3(props: DiagramNodeProps) {
  return (
    <Shape {...LOADING_3} {...props} _style={extendStyle(LOADING_3, props)} />
  )
}
