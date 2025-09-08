import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NORMALIZER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.normalizer;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function Normalizer(props: DiagramNodeProps) {
  return (
    <Shape {...NORMALIZER} {...props} _style={extendStyle(NORMALIZER, props)} />
  )
}
