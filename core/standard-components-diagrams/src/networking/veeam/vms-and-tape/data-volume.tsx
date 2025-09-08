import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_VOLUME = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.datastore_volume;',
  },
  _original_width: 63.2,
  _original_height: 16.8,
}

export function DataVolume(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_VOLUME}
      {...props}
      _style={extendStyle(DATA_VOLUME, props)}
    />
  )
}
