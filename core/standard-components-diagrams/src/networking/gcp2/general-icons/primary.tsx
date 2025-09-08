import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIMARY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.primary',
  },
  _original_width: 100,
  _original_height: 15,
}

export function Primary(props: DiagramNodeProps) {
  return <Shape {...PRIMARY} {...props} _style={extendStyle(PRIMARY, props)} />
}
