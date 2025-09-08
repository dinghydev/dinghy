import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_VOLUME = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.data_volume;',
  },
  _original_width: 40,
  _original_height: 11,
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
