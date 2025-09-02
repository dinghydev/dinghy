import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAPHRAGM = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.diaphragm;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Diaphragm(props: DiagramNodeProps) {
  return (
    <Shape {...DIAPHRAGM} {...props} _style={extendStyle(DIAPHRAGM, props)} />
  )
}
