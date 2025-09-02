import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLUME_SHADOW_COPY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#75B4DB;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.volume_shadow_copy;',
  },
  _original_width: 57.2,
  _original_height: 57.2,
}

export function VolumeShadowCopy(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOLUME_SHADOW_COPY}
      {...props}
      _style={extendStyle(VOLUME_SHADOW_COPY, props)}
    />
  )
}
