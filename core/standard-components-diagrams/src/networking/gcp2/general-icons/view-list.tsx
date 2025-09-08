import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIEW_LIST = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.view_list',
  },
  _original_width: 81,
  _original_height: 100,
}

export function ViewList(props: DiagramNodeProps) {
  return (
    <Shape {...VIEW_LIST} {...props} _style={extendStyle(VIEW_LIST, props)} />
  )
}
