import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCRATCH_OUT = {
  _style: {
    entity:
      'shape=mxgraph.mockup.markup.scratchOut;shadow=0;dashed=0;html=1;whiteSpace=wrap;strokeColor=#999999;strokeWidth=4;',
  },
  _width: 200,
  _height: 100,
}

export function ScratchOut(props: NodeProps) {
  return (
    <Shape
      {...SCRATCH_OUT}
      {...props}
      _style={extendStyle(SCRATCH_OUT, props)}
    />
  )
}
