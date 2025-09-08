import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GUNN_DIODE = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.gunn_diode;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function GunnDiode(props: DiagramNodeProps) {
  return (
    <Shape {...GUNN_DIODE} {...props} _style={extendStyle(GUNN_DIODE, props)} />
  )
}
