import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPTICAL_TRANSPORT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.optical_transport;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 77,
}

export function OpticalTransport(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTICAL_TRANSPORT}
      {...props}
      _style={extendStyle(OPTICAL_TRANSPORT, props)}
    />
  )
}
