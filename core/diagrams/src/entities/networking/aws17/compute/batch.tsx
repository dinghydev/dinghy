import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATCH = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.batch;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Batch(props: DiagramNodeProps) {
  return <Shape {...BATCH} {...props} _style={extendStyle(BATCH, props)} />
}
