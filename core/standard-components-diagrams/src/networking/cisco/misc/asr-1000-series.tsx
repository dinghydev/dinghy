import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASR_1000_SERIES = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.asr_1000_series;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 88,
  _original_height: 86,
}

export function Asr1000Series(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASR_1000_SERIES}
      {...props}
      _style={extendStyle(ASR_1000_SERIES, props)}
    />
  )
}
