import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHOTODIODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photodiode;pointerEvents=1;',
  },
  _width: 100,
  _height: 70,
}

export function Photodiode(props: DiagramNodeProps) {
  return (
    <Shape {...PHOTODIODE} {...props} _style={extendStyle(PHOTODIODE, props)} />
  )
}
