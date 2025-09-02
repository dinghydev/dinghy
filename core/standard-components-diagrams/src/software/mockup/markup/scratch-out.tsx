import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCRATCH_OUT = {
  _style: {
    entity:
      'shape=mxgraph.mockup.markup.scratchOut;shadow=0;dashed=0;html=1;whiteSpace=wrap;strokeColor=#999999;strokeWidth=4;',
  },
  _original_width: 200,
  _original_height: 100,
}

export function ScratchOut(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCRATCH_OUT}
      {...props}
      _style={extendStyle(SCRATCH_OUT, props)}
    />
  )
}
