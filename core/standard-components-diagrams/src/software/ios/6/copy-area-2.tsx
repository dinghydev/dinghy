import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPY_AREA_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.ios.rect;fillColor=#2266ff;strokeColor=none;opacity=30;sketch=0;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function CopyArea2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COPY_AREA_2}
      {...props}
      _style={extendStyle(COPY_AREA_2, props)}
    />
  )
}
