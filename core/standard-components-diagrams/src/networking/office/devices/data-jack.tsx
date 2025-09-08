import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_JACK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.data_jack;',
  },
  _original_width: 47,
  _original_height: 47,
}

export function DataJack(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_JACK} {...props} _style={extendStyle(DATA_JACK, props)} />
  )
}
