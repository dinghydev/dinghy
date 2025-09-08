import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHOTODIODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photodiode;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function Photodiode(props: DiagramNodeProps) {
  return (
    <Shape {...PHOTODIODE} {...props} _style={extendStyle(PHOTODIODE, props)} />
  )
}
